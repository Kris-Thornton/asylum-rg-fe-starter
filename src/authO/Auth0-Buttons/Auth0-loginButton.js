import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/RenderLandingPage.less';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        returnTo: '/profile',
      },
    });
  };

  return (
    <button className="auth0button" onClick={handleLogin}>
      Log in
    </button>
  );
};

export default LoginButton;
