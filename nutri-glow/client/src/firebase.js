// // import { initializeApp } from "@firebase/app"
// // authenticate module for firebase
// import 'firebase/auth';

import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAybahzXmnkcg4e08M7nSF_cyHiJWCUrLM',
  authDomain: 'nutriglow-5ac08.firebaseapp.com',
  projectId: 'nutriglow-5ac08',
  storageBucket: 'nutriglow-5ac08.appspot.com',
  messagingSenderId: '822565803546',
  appId: '1:822565803546:web:9bb336d62d8fa207f2a3a3',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// // access to firebase database

const db = firebase.firestore();

// // specific authentication instance
const auth = firebase.auth();
export { auth };
export default db;
