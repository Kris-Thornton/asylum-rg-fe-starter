import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const history = useHistory();

  const onRedirectCallback = appState => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : (window.location.href = 'http://localhost:3000/profile')
    );
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.href}
      // updated the redirectUri from {redirectUri} to what you see above.
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
