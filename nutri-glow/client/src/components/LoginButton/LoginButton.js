import { React } from 'react';
import { Link } from 'react-router-dom';
import './LoginButton.scss';

const LoginButton = () => {
  return (
    <Link to="/login">
      <button className="loginButtonNav">Login</button>
    </Link>
  );
};

export default LoginButton;
