import React, { useState, useEffect, useRef } from 'react'
import { auth } from '../../firebase';
import './Login.scss'
import Signup from '../Signup/Signup'
import { Link } from 'react-router-dom'

// form to capture user credential
// when user fills form, login and access is given to profile page
// if user detail is incorrect, return error message to user and prompt to try again
// if user doesn't have a pre-existing account, provide option to sign up

function Login() {

  // capture user input value for later use
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then(user => {
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then(user => {
      console.log(user)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="signin">
      <form action="">
        <h1>Sign in</h1>
        <label>Email</label>
        <input ref={emailRef} type="email" />
        <label>Password</label>
        <input ref={passwordRef} type="password" />
        <button onClick={signIn}>Sign in </button>
        <h6>Not yet registered? <Link to="/signup" className="btn btn-primary">Sign Up</Link></h6>
      </form>

    </div>
  )
}

export default Login
