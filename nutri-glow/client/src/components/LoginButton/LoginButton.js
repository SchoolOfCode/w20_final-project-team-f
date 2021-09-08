import { React } from 'react'
import { Link } from 'react-router-dom';
import "./LoginButton.scss"

const LogInButton = () => {
    return (
        <button><Link className="loginButton" to="/login" className="btn btn-primary">Login</Link>
        </button>
    );
}

export default LogInButton;