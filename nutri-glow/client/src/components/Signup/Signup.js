import React, { useState, useEffect, useRef } from 'react'
import { auth } from '../../firebase';
// import { db } from 'firebase'
import './Signup.scss'
import { Link } from 'react-router-dom';


require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


function Signup() {

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



    return (
        <div className="signin">
            <form action="">

                <h1>Register</h1>

                <label>Full Name</label>
                <input ref={fullNameRef} type="text" />
                <label>Email</label>
                <input ref={emailRef} type="email" />
                <label>Age</label>
                <input ref={ageRef} type="number" />
                <label>Are you?</label>
                <select ref={stageRef} id="motherhood-stage" name="stage">
                    <option value="blank"></option>
                    <option value="tryingToConceive">Trying to conceive</option>
                    <option value="pregnant">Currently pregnant</option>
                    <option value="mother">Mother within the last 5 years</option>
                </select>
                <label>Goals</label>
                <select ref={goalsRef} id="goals" name="goals">
                    <option value="blank"></option>
                    <option value="goal1">Goals</option>
                    <option value="goal2">Goals 2</option>
                    <option value="goal3">Goals 3</option>
                </select>
                <label>Password</label>
                <input ref={passwordRef} type="password" />
                <button onClick={signUp}>Sign Up </button>
                <h6>Already have an account? <Link className="login-link" to="/login" className="btn btn-primary">Login</Link></h6>
            </form>

        </div>
    )
}

export default Signup;




{/* <h6>Already have an account? <span onClick={<Login />} className="signin__link">Login</span></h6> */ }