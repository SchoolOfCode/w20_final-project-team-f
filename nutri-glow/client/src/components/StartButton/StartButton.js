import { React } from 'react';
import './StartButton.scss';

export default function StartButton({ text }) {
  return <button data-testid="signup-1" className="startButton">{text}</button>;
}
