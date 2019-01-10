import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <div>
        <h2>New user?</h2>
        <p>Please register an account.</p>
        <Link to="/user/register">Register</Link>
      </div>

      <div>
        <h2>Existing user?</h2>
        <p>Please log in.</p>
        <Link to="/user/login">Login</Link>
      </div>
    </div>
  );
};

export default Welcome;
