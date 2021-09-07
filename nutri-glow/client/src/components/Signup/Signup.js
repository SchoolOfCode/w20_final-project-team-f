import React, { useState, useEffect, useRef } from 'react';
import { auth ,db } from "../../firebase";
import { useHistory } from "react-router-dom";
// import { db } from 'firebase'

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

  let history = useHistory();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);
  const ageRef = useRef(null);
  const stageRef = useRef(null);
  const goalsRef = useRef(null);
  const heightRef= useRef(null)
  const weightRef= useRef(null)
  const medicalRef= useRef(null)
  const signUp = (e) => {
    e.preventDefault();


    console.log(
      emailRef.current.value, 
      passwordRef.current.value,
      fullNameRef.current.value,
      ageRef.current.value,
      stageRef.current.value,
      goalsRef.current.value,
      heightRef.current.value,
      weightRef.current.value,
      medicalRef.current.value

      )

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);

        db.child(user.user.uid).set({
            displayFullName: fullNameRef.current.value,
            age: ageRef.current.value,
            stage: stageRef.current.value,
            goals: goalsRef.current.value,
            height: heightRef.current.value,
            weight: weightRef.current.value,
            medical:medicalRef.current.value
        })
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };



  
  // const signIn = (e) => {
  //   e.preventDefault();
  //   auth
  //     .signInWithEmailAndPassword(
  //       emailRef.current.value,
  //       passwordRef.current.value
  //     )
  //     .then((user) => {
  //       console.log(user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // return form to capture user sign up details

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
                <label className="signupLabel">Full Name</label>
                <input ref={fullNameRef} type="text" />
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
                  <select ref={heightRef} id="height" name="height">
                    <option value="blank"></option>
                    <option value="<4">Less than 4ft</option>
                    <option value="4to5">0</option>
                    <option value="5to5.5">Between 5ft and 5ft6</option>
                    <option value="5.6and above">5ft7 and above</option>
                  </select>
                </div>
                <div className="weightForm">
                  <label className="signupLabel">What is your weight?</label>
                  <select ref={weightRef} id="height" name="height">
                    <option value="blank"></option>
                    <option value="60-89">60-89kg</option>
                    <option value="90-119">90-119kg</option>
                    <option value="120-300">100-300kg</option>
                    <option value="300+">300kg+</option>
                  </select>
                </div>
              </div>
              <div className="stages">
                <div className="pregStage">
                  <label className="signupLabel">Stage of pregnancy</label>
                  <select ref={stageRef} id="motherhood-stage" name="stage">
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
                    <option value="goal1">Goals</option>
                    <option value="goal2">Goals 2</option>
                    <option value="goal3">Goals 3</option>
                  </select>
                </div>
              </div>
              <label className="signupLabel">
                Do you have any medical conditions?
              </label>
              <select ref={medicalRef} id="medical-conditions" name="medical-conditions">
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
