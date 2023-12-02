import React from 'react';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
  let history = useHistory();

  const handleLogout = () => {
    let path = '/';
    history.push(path);
  };

  return (
    <button className="auth0button" onClick={handleLogout}>
      Log out
    </button>
  );
};

export default LogoutButton;
