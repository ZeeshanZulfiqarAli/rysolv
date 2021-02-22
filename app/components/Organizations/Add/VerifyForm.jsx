import React, { Fragment } from 'react';
import T from 'prop-types';

import iconDictionary from 'utils/iconDictionary';

import {
  ContentWrapper,
  DescriptionWrapper,
  LogoWrapper,
  RepoName,
  RepoNameWrapper,
  StyledIcon,
  StyledLink,
} from './styledComponents';

const CodeIcon = iconDictionary('code');
const LinkIcon = iconDictionary('link');

export class VerifyForm extends React.PureComponent {
  render() {
    const {
      repoData: {
        organizationDescription,
        organizationLogo,
        organizationName,
        organizationRepo,
        organizationUrl,
      },
    } = this.props;
    return (
      <Fragment>
        <ContentWrapper>
          <LogoWrapper
            alt={organizationName.value}
            src={organizationLogo.value}
          />
          <RepoNameWrapper>
            <RepoName>{organizationName.value}</RepoName>
            <ContentWrapper>
              <StyledLink
                hasValue={!!organizationUrl.value}
                href={organizationRepo.value}
                target="_blank"
              >
                <StyledIcon>{CodeIcon}</StyledIcon>
                {organizationRepo.value}
              </StyledLink>
              <StyledLink
                hasValue={!!organizationUrl.value}
                href={organizationUrl.value}
                target="_blank"
              >
                <StyledIcon>{LinkIcon}</StyledIcon>
                {organizationUrl.value}
              </StyledLink>
            </ContentWrapper>
          </RepoNameWrapper>
        </ContentWrapper>
        <DescriptionWrapper hasValue={!!organizationDescription.value}>
          {organizationDescription.value}
        </DescriptionWrapper>
      </Fragment>
    );
  }
}

VerifyForm.propTypes = { repoData: T.object.isRequired };

export default VerifyForm;
