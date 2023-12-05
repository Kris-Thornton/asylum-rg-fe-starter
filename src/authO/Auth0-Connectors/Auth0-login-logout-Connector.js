import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from '../Auth0-Buttons/Auth0-loginButton';
import LogoutButton from '../Auth0-Buttons/Auth0-logoutButton';

const LoginLogoutAuth0 = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default LoginLogoutAuth0;
