// // import { initializeApp } from "@firebase/app"
// // authenticate module for firebase
// import 'firebase/auth';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBeBPo1KJpNnGYpr9FOhdWEDynNEJEfteY",
  authDomain: "aminascode-f3ebd.firebaseapp.com",
  projectId: "aminascode-f3ebd",
  storageBucket: "aminascode-f3ebd.appspot.com",
  messagingSenderId: "408245361435",
  appId: "1:408245361435:web:74ae67a06470e178e811be",
  measurementId: "G-3QP6PH58M6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// get database from firebase store
// const database = firebase.firestore()

const auth = firebase.auth();
const db = firebase.database().ref("profile");
export {auth,db}
