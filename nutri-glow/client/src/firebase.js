// // // import { initializeApp } from "@firebase/app"
// // // authenticate module for firebase
// // import 'firebase/auth';

// import firebase from 'firebase';

// var firebaseConfig = {
//   apiKey: 'AIzaSyAybahzXmnkcg4e08M7nSF_cyHiJWCUrLM',
//   authDomain: 'nutriglow-5ac08.firebaseapp.com',
//   projectId: 'nutriglow-5ac08',
//   storageBucket: 'nutriglow-5ac08.appspot.com',
//   messagingSenderId: '822565803546',
//   appId: '1:822565803546:web:9bb336d62d8fa207f2a3a3',
// };
// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // // access to firebase database

// const db = firebase.firestore();

// // // specific authentication instance
// const auth = firebase.auth();
// export { auth };
// export default db;

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCvRRGNTWJXAYvMmk5y6Wn832oIyhZr0CA',
  authDomain: 'team-nutri-glow.firebaseapp.com',
  projectId: 'team-nutri-glow',
  storageBucket: 'team-nutri-glow.appspot.com',
  messagingSenderId: '688866165176',
  appId: '1:688866165176:web:17767798a1d992cbb50f4d',
  measurementId: 'G-YFRJSTFBS6',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// get database from firebase store
// const database = firebase.firestore()

const auth = firebase.auth();
const db = firebase.database().ref('profile');
export { auth, db };
