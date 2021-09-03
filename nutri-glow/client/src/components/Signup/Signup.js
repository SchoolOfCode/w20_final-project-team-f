import React, { useState, useEffect, useRef } from 'react'
import { auth } from '../../firebase';
// import { db } from 'firebase'

import './Signup.scss'


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
    const fullNameRef = useRef(null);
    const ageRef = useRef(null);
    const stageRef = useRef(null);
    const goalsRef = useRef(null);

    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)

            // stateObj.dispatch({ type: ACTIONS.SET_USERID, payload: User.user.uid })

            // db.child(User.user.uid).set({
            //     displayFullName: fullNameRef.current.value,
            //     age: ageRef.current.value,
            //     stage: stageRef.current.value,
            //     goals: goalsRef.current.value,

            // })
            // history.push("/profile");

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

    // return form to capture user sign up details

    return (
        <div className="signupForm">
            <form action="">
                <div className="signupHeader">
                    <h1 id="signup">Sign up</h1>
                    <h3 id="signupTag">It's free and easy</h3>
                </div>
                <label className="signupLabel">Full Name</label>
                <input ref={fullNameRef} type="text" />
                <label className="signupLabel">Email</label>
                <input ref={emailRef} type="email" />
                <label className="signupLabel">Age</label>
                <input ref={ageRef} type="number" />
                <label className="signupLabel">What is your height?</label>
                <select ref={stageRef} id="height" name="height">
                    <option value="blank"></option>
                    <option value="<4">Less than 4ft</option>
                    <option value="4to5">0</option>
                    <option value="5to5.5">Between 5ft and 5ft6</option>
                    <option value="5.6and above">5ft7 and above</option>
                </select>
                <label className="signupLabel">What is your weight?</label>
                <select ref={stageRef} id="height" name="height">
                    <option value="blank"></option>
                    <option value="60-89">60-89kg</option>
                    <option value="90-119">90-119kg</option>
                    <option value="120-300">100-300kg</option>
                    <option value="300+">300kg+</option>
                </select>
                <label className="signupLabel">Are you?</label>
                <select ref={stageRef} id="motherhood-stage" name="stage">
                    <option value="blank"></option>
                    <option value="tryingToConceive">Trying to conceive</option>
                    <option value="pregnant">Currently pregnant</option>
                    <option value="mother">Mother within the last 5 years</option>
                </select>
                <label className="signupLabel">Goals</label>
                <select ref={goalsRef} id="goals" name="goals">
                    <option value="blank"></option>
                    <option value="goal1">Goals</option>
                    <option value="goal2">Goals 2</option>
                    <option value="goal3">Goals 3</option>
                </select>
                <label className="signupLabel">Do you have any medical conditions?</label>
                <select id="medical-conditions" name="medical-conditions">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="not-sure">I'm not sure</option>
                </select>
                <label className="signupLabel">Password</label>
                <input ref={passwordRef} type="password" />
                <button id="createAccount" onClick={signUp}>Create Account </button>
                <h6 className="alreadyHaveAccount">Already have an account? <a href="/login" className="signupLink">Login</a></h6>
            </form>

        </div>
    )
}

export default Signup;


