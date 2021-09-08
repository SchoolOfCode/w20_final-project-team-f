import { React } from 'react';
import { Link } from 'react-router-dom';
import "./LoginButton.scss"

const LogInButton = () => {
  return (
    <button>
      <Link className="loginButton" to="/login">
        Login
      </Link>
    </button>
  );
};

export default LogInButton;
