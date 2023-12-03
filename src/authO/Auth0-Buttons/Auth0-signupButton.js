import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    console.log('Auth route is working');
    await loginWithRedirect({
      appState: {
        returnTo: '/profile',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  return (
    <button className="auth0button" onClick={handleSignUp}>
      Sign up
    </button>
  );
};

export default SignupButton;
