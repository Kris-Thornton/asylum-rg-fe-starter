import React from 'react';

const handleSignUp = () => {
  console.log('working');
};

const SignupButton = () => {
  return (
    <button className="auth0button" onClick={handleSignUp}>
      Sign up
    </button>
  );
};

export default SignupButton;
