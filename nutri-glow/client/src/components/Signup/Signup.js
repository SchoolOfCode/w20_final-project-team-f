import React, { useRef } from 'react';
import { auth } from '../../firebase';
import './Signup.scss';

// testing early Hook problem/error as per React docs
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

// form to capture user credential
// when user fills form, account is created and access is given to profile page
// prompt user if user detail exists already
// prompt user if input parameter doesn't match expectation (i.e. incomplete nos. of password characters)
// if user already has a pre-existing account, provide option to login

function Signup() {
  // capture user input value for later use
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const firstNameRef = useRef(null);
  const surnameRef = useRef(null);
  const ageRef = useRef(null);
  const stageRef = useRef(null);
  const goalsRef = useRef(null);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   // return form to capture user sign up details

  return (
    <div className="signupContainer">
      <div className="leftForm">
        <div className="formWrapper">
          <div className="signupHeader">
            <h1 id="signup">Sign up</h1>
            <h2 id="signupTag">It's free and easy</h2>
          </div>
          <div className="formContainer">
            <form action="" className="signupForm">
              <div className="nameForm">
                <label className="signupLabel">First Name</label>
                <input ref={firstNameRef} type="text" />
              </div>
              <div className="surnameForm">
                <label className="signupLabel">Surname</label>
                <input ref={surnameRef} type="text" />
              </div>
              <div className="details">
                <div className="emailForm">
                  <label className="signupLabel">Email</label>
                  <input ref={emailRef} type="email" />
                </div>
                <div className="ageForm">
                  <label className="signupLabel">Age</label>
                  <input ref={ageRef} type="number" />
                </div>
              </div>
              <div className="bodyDetails">
                <div className="heightForm">
                  <label className="signupLabel">What is your height?</label>
                  <select ref={stageRef} id="height" name="height">
                    <option value="blank"></option>
                    <option value="<4">Less than 4ft</option>
                    <option value="4to5">Between 4ft and 5ft</option>
                    <option value="5to5.5">Between 5ft and 5ft6</option>
                    <option value="5.6and above">5ft7 and above</option>
                  </select>
                </div>
                <div className="weightForm">
                  <label className="signupLabel">What is your weight?</label>
                  <select ref={stageRef} id="height" name="height">
                    <option value="blank"></option>
                    <option value="40-60">40-60kg</option>
                    <option value="60-80">60-80kg</option>
                    <option value="80-100">80-100kg</option>
                    <option value="100+">100kg+</option>
                  </select>
                </div>
              </div>
              <div className="stages">
                <div className="pregStage">
                  <label className="signupLabel">
                    Current stage of journey
                  </label>
                  <select ref={stageRef} id="stage" name="stage">
                    <option value="blank"></option>
                    <option value="tryingToConceive">Trying to conceive</option>
                    <option value="pregnant">Currently pregnant</option>
                    <option value="mother">
                      Mother within the last 5 years
                    </option>
                  </select>
                </div>
                <div className="goalsForm">
                  <label className="signupLabel">Goals</label>
                  <select ref={goalsRef} id="goals" name="goals">
                    <option value="blank"></option>
                    <option value="goal1">
                      I want to get pregnancy health and nutrition advice
                    </option>
                    <option value="goal2">I want to lose weight</option>
                    <option value="goal3">
                      I want to connect with other mothers
                    </option>
                  </select>
                </div>
              </div>
              <label className="signupLabel">
                Do you have any medical conditions?
              </label>
              <select id="medical" name="medical-conditions">
                <option value="blank"></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="not-sure">I'm not sure</option>
              </select>
              <label className="signupLabel">Password</label>
              <input ref={passwordRef} type="password" />
              <button
                className="buttonForm"
                id="createAccount"
                onClick={signUp}
              >
                Create Account{' '}
              </button>
              <h4>
                Already have an account?{' '}
                <a href="/login" className="loginLink">
                  Login
                </a>
              </h4>
            </form>
          </div>
        </div>
      </div>
      <div className="rightContainer">
        <div className="formImageContainer">
          <img className="imageForm" alt="" src="/assets/signup.png" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
