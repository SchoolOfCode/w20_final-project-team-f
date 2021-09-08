import { React } from 'react';
import './StartButton.scss';
import { Link } from 'react-router-dom';

export default function StartButton({ text }) {
  return (
    <div>
      <Link className="startButton" to="/signup" className="btn btn-primary">{text}</Link>
    </div>
  )
}

