import firebase from 'firebase/app'
// import { initializeApp } from "@firebase/app"
// authenticate module for firebase
import 'firebase/auth'

// require("dotenv").config()

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,

})

// specific authentication instance
export const auth = app.auth()

// general firebase reusable throughout the app
export default app

