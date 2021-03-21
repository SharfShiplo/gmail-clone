import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD0eAbJpVdmB25pvAiwLxAnMZEDB4Iw8wo",
  authDomain: "email-project-2a23f.firebaseapp.com",
  projectId: "email-project-2a23f",
  storageBucket: "email-project-2a23f.appspot.com",
  messagingSenderId: "681285185478",
  appId: "1:681285185478:web:d97f369b630a94cb44ccc7",
  measurementId: "G-CFF18BCN5W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
