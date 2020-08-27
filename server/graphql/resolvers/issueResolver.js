const Identicon = require('identicon.js');
const { v4: uuidv4 } = require('uuid');

const {
  checkDuplicateIssue,
  checkDuplicateOrganization,
  closeIssue,
  createIssue,
  createOrganization,
  downvoteIssue,
  getIssues,
  getOneIssue,
  getOrganizationsWhere,
  searchIssues,
  transformIssue,
  updateIssueArray,
  updateOrganizationArray,
  updateUserArray,
  upvoteIssue,
} = require('../../db');
const { createActivity } = require('./activityResolver');
const { formatIssueUrl } = require('../../integrations/github/helpers');
const { getSingleIssue, getSingleRepo } = require('../../integrations');
const { uploadImage } = require('../../middlewares/imageUpload');

const newIssueObject = (issueId, issueInput) => ({
  attempting: issueInput.attempting || [], // attempting
  body: issueInput.body, // body
  comments: issueInput.comments || [], // comments
  contributor_id: issueInput.contributor, // contributor
  created_date: new Date(), // created_date
  funded_amount: issueInput.fundedAmount || 0, // funded_amount
  id: issueId, // id
  is_manual: issueInput.isManual,
  language: issueInput.language || [], // language
  modified_date: new Date(), // modified_data
  name: issueInput.name, // name
  open: issueInput.open || true, // open
  organization_id: issueInput.organizationId, // organization_id
  rep: issueInput.rep || 25, // rep
  repo: issueInput.repo, // repo
  type: issueInput.type || 'bug', // bug
});

const newOrganizationObject = async organizationInput => {
  const organizationId = uuidv4();
  const { uploadUrl } = await uploadImage(organizationInput.organizationLogo);

  return {
    contributors: [], // contributors
    created_date: new Date(), // created_date
    description: organizationInput.organizationDescription, // description
    id: organizationId, // id
    is_manual: organizationInput.isManual, // is_manual
    issues: organizationInput.issues || [], // issues
    logo: uploadUrl, // logo
    modified_date: new Date(), // modified_date
    name: organizationInput.organizationName, // name
    organization_url: organizationInput.organizationUrl || '', // url
    owner_id: organizationInput.contributor, // owner_id
    preferred_languages: organizationInput.preferred_languages || [], // languages
    repo_url: organizationInput.organizationRepo, // repo
    total_funded: organizationInput.totalFunded || 0, // funded
    verified: organizationInput.verified || false, // verified
  };
};

module.exports = {
  closeIssue: async args => {
    const { id, shouldClose } = args;
    try {
      const response = await closeIssue({ issueId: id, shouldClose });

      const result = await getOneIssue({ issueId: id });

      const activityInput = {
        actionType: shouldClose ? 'close' : 'reopen',
        issueId: result.id,
        organizationId: result.organizationId,
        userId: result.userId,
      };
      await createActivity({ activityInput });

      return response;
    } catch (err) {
      throw err;
    }
  },
  createIssue: async args => {
    const { issueInput } = args;
    const { identiconId, organizationId, organizationRepo, repo } = issueInput;
    const newIssueId = uuidv4();

    if (identiconId && identiconId !== 'undefined') {
      issueInput.organizationLogo = new Identicon(identiconId, 250).toString();
    }

    // Populate issue object and create new issue
    const createNewIssue = async () => {
      const issueObject = newIssueObject(newIssueId, issueInput);
      try {
        const result = await createIssue(issueObject);
        return result;
      } catch (err) {
        throw err;
      }
    };
    // **********

    // Populate organization object and create new organization
    const createNewOrganization = async () => {
      // backup check
      if (await checkDuplicateOrganization({ repo: organizationRepo })) {
        throw new Error(
          `Organization at ${issueInput.organizationRepo} already exists`,
        );
      }

      const organizationObject = await newOrganizationObject(issueInput);
      try {
        const result = await createOrganization({ data: organizationObject });
        return result;
      } catch (err) {
        throw err;
      }
    };
    // **********

    try {
      // Check for duplicate issue
      if (await checkDuplicateIssue({ repo })) {
        throw new Error(`Issue at ${repo} already exists`);
      }

      // Check for existing organization. If not: create organization
      if (!organizationId) {
        const organizationResult = await createNewOrganization();

        const activityInput = {
          actionType: 'create',
          organizationId: organizationResult.id,
          userId: organizationResult.ownerId,
        };
        await createActivity({ activityInput });

        issueInput.organizationId = organizationResult.id;
      }

      // Create new issue
      const issueResult = await createNewIssue();

      const activityInput = {
        actionType: 'create',
        organizationId: issueResult.organization_id,
        issueId: issueResult.id,
        userId: issueResult.contributor_id,
      };
      await createActivity({ activityInput });

      // add issue to organization issue list
      await updateOrganizationArray({
        column: 'issues',
        data: newIssueId,
        id: issueInput.organizationId,
        remove: false,
      });

      // add issue to user issue list
      await updateUserArray({
        column: 'issues',
        data: issueResult.id,
        userId: issueInput.contributor,
      });

      // add organization to user list
      await updateUserArray({
        column: 'organizations',
        data: issueInput.organizationId,
        userId: issueInput.contributor,
      });

      return {
        __typename: 'Issue',
        ...issueResult,
      };
    } catch (err) {
      return {
        __typename: 'Error',
        message: err.message,
      };
    }
  },
  getIssues: async () => {
    try {
      const issues = await getIssues();
      return issues;
    } catch (err) {
      throw err;
    }
  },
  importIssue: async args => {
    const { url } = args;
    try {
      // Parse issue url
      const { issueNumber, organization, repo } = formatIssueUrl(url);

      // Get issue detail from github API
      const { issueInput } = await getSingleIssue({
        issueNumber,
        organization,
        repo,
      });

      // Check issue repo for duplicate
      if (await checkDuplicateIssue({ repo: issueInput.issueUrl })) {
        throw new Error(`Issue at ${issueInput.issueUrl} already exists`);
      }

      // Get organization detail from github API
      const { organizationInput } = await getSingleRepo({
        organization,
        repo,
      });

      // Return organizaiton ID if exists in db
      const [organizationData] = await getOrganizationsWhere({
        column: 'repo_url',
        value: organizationInput.organizationRepo,
      });

      if (organizationData) {
        const { id, logo } = organizationData;
        issueInput.organizationId = id;
        organizationInput.organizationLogo = logo;
      }

      const ImportData = { ...issueInput, ...organizationInput };

      return {
        __typename: 'ImportData',
        ...ImportData,
      };
    } catch (err) {
      return {
        __typename: 'Error',
        message: err.message,
      };
    }
  },
  oneIssue: async args => {
    const { id } = args;
    try {
      const result = await getOneIssue({ issueId: id });
      return {
        __typename: 'Issue',
        ...result,
      };
    } catch (err) {
      return {
        __typename: 'Error',
        message: err.message,
      };
    }
  },
  searchIssues: async args => {
    const { value } = args;
    try {
      const result = await searchIssues({ value });
      return result;
    } catch (err) {
      throw err;
    }
  },
  transformIssue: async args => {
    const { id, issueInput } = args;
    try {
      const data = {
        attempting: issueInput.attempting,
        body: issueInput.body,
        comments: issueInput.comments,
        contributor_id: issueInput.contributorId,
        funded_amount: issueInput.fundedAmount,
        language: issueInput.language,
        modified_date: new Date(), // update modified date
        name: issueInput.name,
        open: issueInput.open,
        organization_id: issueInput.organizationId,
        rep: issueInput.rep,
        repo: issueInput.repo,
      };
      const result = await transformIssue(id, data);

      const activityInput = {
        actionType: 'update',
        queryResult: result.organizationId,
        issueId: result.id,
        userId: result.contributorId,
      };
      await createActivity({ activityInput });

      return {
        __typename: 'Issue',
        ...result,
      };
    } catch (err) {
      return {
        __typename: 'Error',
        message: err.message,
      };
    }
  },
  updateIssueArray: async args => {
    const { id: issueId, column, data: userId, remove } = args;

    const result = await updateIssueArray({
      column,
      data: userId,
      issueId,
      remove,
    });

    const activityInput = {
      actionType: remove ? `remove_${column}` : `add_${column}`,
      issueId,
      organizationId: result.organization_id,
      userId,
    };
    await createActivity({ activityInput });

    return result;
  },
  upvoteIssue: async args => {
    const { issueId, upvote, userId } = args;
    try {
      if (upvote) {
        const { issueRep, userRep } = await upvoteIssue({
          issueId,
          userId,
        });
        const result = { issueRep, userRep };
        return {
          __typename: 'Upvote',
          ...result,
        };
      }
      const { issueRep, userRep } = await downvoteIssue({
        issueId,
        userId,
      });

      const result = { issueRep, userRep };
      return {
        __typename: 'Upvote',
        ...result,
      };
    } catch (err) {
      return {
        __typename: 'Error',
        message: err.message,
      };
    }
  },
};
