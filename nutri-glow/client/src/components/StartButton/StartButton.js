import { React } from 'react';
import Login from '../Login/Login';
import './StartButton.scss';
import { Link } from 'react-router-dom';

export default function StartButton({ text }) {
  return (
    <div>
      <Link className="startButton" to="/signup" className="btn btn-primary">{text}</Link>
    </div>
  )
}

