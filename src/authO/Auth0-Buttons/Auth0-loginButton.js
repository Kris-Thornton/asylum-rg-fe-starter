import React from 'react';

import { useHistory } from 'react-router-dom';
import '../../styles/RenderLandingPage.less';

const LoginButton = () => {
  let history = useHistory();

  const handleLogin = () => {
    let path = '/profile';
    history.push(path);
  };

  return (
    <button className="auth0button" onClick={handleLogin}>
      Log in
    </button>
  );
};

export default LoginButton;
