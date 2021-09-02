// import firebase from 'firebase';
// // import { initializeApp } from "@firebase/app"
// // authenticate module for firebase
// import 'firebase/auth';

// // require("dotenv").config()

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

// // specific authentication instance
// export const auth = app.auth();

// // general firebase reusable throughout the app
// export default app;

// // testing firebase


import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAybahzXmnkcg4e08M7nSF_cyHiJWCUrLM",
  authDomain: "nutriglow-5ac08.firebaseapp.com",
  projectId: "nutriglow-5ac08",
  storageBucket: "nutriglow-5ac08.appspot.com",
  messagingSenderId: "822565803546",
  appId: "1:822565803546:web:9bb336d62d8fa207f2a3a3"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;