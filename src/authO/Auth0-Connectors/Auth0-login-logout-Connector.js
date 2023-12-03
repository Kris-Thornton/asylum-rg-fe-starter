import React from 'react';

import LoginButton from '../Auth0-Buttons/Auth0-loginButton';
import LogoutButton from '../Auth0-Buttons/Auth0-logoutButton';

import { useAuth0 } from '@auth0/auth0-react';

const LoginLogoutAuth0 = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default LoginLogoutAuth0;
