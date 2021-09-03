import React, { useState, useEffect, useRef } from 'react'
import { auth } from '../../firebase';
import './Login.scss'
import Home from '../../pages/Home';
import Signup from '../Signup/Signup'
import { Link } from 'react-router-dom'

function Login() {

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
      {/* form to capture user detail for login */}
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
