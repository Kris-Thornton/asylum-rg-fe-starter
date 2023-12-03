import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import SignupButton from '../Auth0-Buttons/Auth0-signupButton';
import LoginButton from '../Auth0-Buttons/Auth0-loginButton';
import LogoutButton from '../Auth0-Buttons/Auth0-logoutButton';

const SignupAuth0 = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Link to="profile">Profile</Link> : <SignupButton />;
};

export default SignupAuth0;
