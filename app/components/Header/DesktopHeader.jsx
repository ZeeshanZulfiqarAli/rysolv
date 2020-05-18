import React, { Fragment } from 'react';
import T from 'prop-types';

import { HeaderWrap, UserNavBar } from '../base_ui';
import { ButtonsWrapper, Signin, SignUp, Browse } from './styledComponents';

const DesktopHeader = ({
  activeUser,
  dispatchOpenModal,
  handleNav,
  handleSignout,
  isMobile,
  isSignedIn,
}) => (
  <HeaderWrap handleNav={handleNav} isMobile={isMobile}>
    <ButtonsWrapper>
      <Browse label="Browse" path="/issues" />
      {isSignedIn ? (
        <UserNavBar
          activeUser={activeUser}
          dispatchOpenModal={dispatchOpenModal}
          handleSignout={handleSignout}
        />
      ) : (
        <Fragment>
          <SignUp label="Sign Up" path="/signup" />
          <Signin label="Sign In" path="/signin" />
        </Fragment>
      )}
    </ButtonsWrapper>
  </HeaderWrap>
);

DesktopHeader.propTypes = {
  activeUser: T.object,
  dispatchOpenModal: T.func,
  handleNav: T.func,
  handleSignout: T.func,
  isMobile: T.bool,
  isSignedIn: T.bool,
};

export default DesktopHeader;
