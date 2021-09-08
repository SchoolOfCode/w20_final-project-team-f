// // import { initializeApp } from "@firebase/app"
// // authenticate module for firebase
// import 'firebase/auth';

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCvRRGNTWJXAYvMmk5y6Wn832oIyhZr0CA",
  authDomain: "team-nutri-glow.firebaseapp.com",
  projectId: "team-nutri-glow",
  storageBucket: "team-nutri-glow.appspot.com",
  messagingSenderId: "688866165176",
  appId: "1:688866165176:web:17767798a1d992cbb50f4d",
  measurementId: "G-YFRJSTFBS6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// get database from firebase store
// const database = firebase.firestore()

const auth = firebase.auth();
const db = firebase.database().ref("profile");
export {auth,db}
