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
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <button onClick={signIn}>Sign in </button>
        <h6>Not yet register? <span onClick={signUp} className="signin__link">Sign up</span></h6>
      </form>

    </div>
  )
}

export default Login