import React from 'react';
import './StartButton.scss';
import SignupForm from '../SignupForm/SignupForm';

// Button onclick takes user to sign up form

export default function StartButton({ text }) {
  return <button className="startButton" onClick={SignupForm}>Start Now</button>;


}


