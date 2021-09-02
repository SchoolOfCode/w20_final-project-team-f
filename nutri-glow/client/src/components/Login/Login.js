import React, { useState, useEffect, useRef } from 'react'
import { auth } from '../../firebase';
import './Login.scss'
import Home from '../../pages/Home';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


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



      <form action="">
        <h1>Sign in</h1>
        <label>Email</label>
        <input ref={emailRef} type="email" />
        <label>Password</label>
        <input ref={passwordRef} type="password" />
        <label>Are you?</label>
        <select id="cars" name="cars">
          <option value="volvo">Trying to conceive</option>
          <option value="saab">Currently pregnant</option>
          <option value="fiat">Mother within the last year</option>
        </select>
        <label>Goals</label>
        <select id="cars" name="cars">
          <option value="volvo">Goals</option>
          <option value="saab">Goals 2</option>
          <option value="fiat">Goals 3</option>
        </select>
        <button onClick={signIn}>Sign in </button>
        <h6>Not yet register? <span onClick={signUp} className="signin__link">Sign up</span></h6>
      </form>

    </div>
  )
}

export default Login