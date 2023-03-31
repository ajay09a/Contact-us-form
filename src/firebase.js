import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUAvOhDze8orsbr3ZA44Tq1Jq40agdTtg",
  authDomain: "contactus-aa300.firebaseapp.com",
  projectId: "contactus-aa300",
  storageBucket: "contactus-aa300.appspot.com",
  messagingSenderId: "1086536059296",
  appId: "1:1086536059296:web:356ba7add14ec40f813cc5",
  measurementId: "G-2327N3HW12"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);



export const firestore = firebase.firestore();