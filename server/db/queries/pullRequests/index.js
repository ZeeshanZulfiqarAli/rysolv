const checkDuplicatePullRequest = require('./checkDuplicatePullRequest');
const createPullRequest = require('./createPullRequest');
const deletePullRequest = require('./deletePullRequest');
const deleteUserPullRequests = require('./deleteUserPullRequests');
const getOnePullRequest = require('./getOnePullRequest');
const getPullRequestList = require('./getPullRequestList');
const getUserPullRequests = require('./getUserPullRequests');

module.exports = {
  checkDuplicatePullRequest,
  createPullRequest,
  deletePullRequest,
  deleteUserPullRequests,
  getOnePullRequest,
  getPullRequestList,
  getUserPullRequests,
};
