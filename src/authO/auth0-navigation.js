import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import SignupButton from './buttons/signup-button';

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Link to="/profile">Profile</Link>
  ) : (
    <SignupButton />
  );
};

export default AuthNav;
