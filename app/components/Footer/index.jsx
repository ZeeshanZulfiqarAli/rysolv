import React from 'react';

import iconDictionary from 'utils/iconDictionary';

import {
  ButtonLink,
  ExternalLink,
  ExternalLinkWrapper,
  FooterContainer,
  InternalLink,
  InternalLinkWrapper,
  LinkColumn,
  LinkRow,
} from './styledComponent';

const DiscordIcon = iconDictionary('discord');
const FacebookIcon = iconDictionary('facebook');
const GithubIcon = iconDictionary('github');
const TwitterIcon = iconDictionary('twitter');

const Footer = () => (
  <FooterContainer>
    <InternalLinkWrapper>
      <LinkColumn>
        <InternalLink label="About" path="" />
        <InternalLink label="How it works" path="/how-to" />
        <InternalLink label="Privacy policy" path="/privacy-policy" />
      </LinkColumn>
      <LinkColumn>
        <InternalLink label="Terms and conditions" path="/terms-of-service" />
        <InternalLink label="FAQ" path="/faq" />
        <InternalLink label="Contact us" path="/contact-us" />
      </LinkColumn>
    </InternalLinkWrapper>
    <ExternalLinkWrapper>
      <div>
        <ButtonLink
          aria-label="Join our discord server"
          href="https://discord.com/channels/239433591950540801/239433678126710784"
          rel="noopener"
          target="_blank"
        >
          {DiscordIcon} Join our server
        </ButtonLink>
      </div>
      <LinkRow>
        <ExternalLink href="https://github.com/rysolv" target="_blank">
          {GithubIcon}
        </ExternalLink>
        <ExternalLink href="https://twitter.com/rysolv" target="_blank">
          {TwitterIcon}
        </ExternalLink>
        <ExternalLink href="https://facebook.com/rysolv" target="_blank">
          {FacebookIcon}
        </ExternalLink>
      </LinkRow>
    </ExternalLinkWrapper>
  </FooterContainer>
);

export default Footer;
