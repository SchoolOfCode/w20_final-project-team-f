import React, { useState, useEffect, useRef } from 'react';
import { auth } from '../../firebase';
import './Login.scss';
import Signup from '../Signup/Signup';
import { Link } from 'react-router-dom';

// form to capture user credential
// when user fills form, login and access is given to profile page
// if user detail is incorrect, return error message to user and prompt to try again
// if user doesn't have a pre-existing account, provide option to sign up

function Login() {
  // capture user input value for later use
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
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

  return (
    <div className="loginContainer">
      <div className="leftLogin">
        <div className="loginWrapper">
          <div className="loginHeader">
            <h1>Sign in</h1>
          </div>
          <div className="loginFormContainer">
            <form action="" className="loginForm">
              <div className="emailLogin">
                <label className="loginLabel">Email</label>
                <input ref={emailRef} type="email" />
              </div>
              <div className="passwordLogin">
                <label className="loginLabel">Password</label>
                <input ref={passwordRef} type="password" />
              </div>
              <button className="loginButton" onClick={signIn}>
                Sign in{' '}
              </button>
              <h4>
                Not yet registered? <Link to="/signup">Sign Up</Link>
              </h4>
            </form>
          </div>
        </div>
      </div>
      <div className="rightLogin">
        <div className="loginImageContainer">
          <img src="/assets/signup.png" className="loginImage" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
