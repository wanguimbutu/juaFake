// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGcAGyjQcN52CFML8a6V9gsipoDKauwUg",
  authDomain: "authentify-c4bb1.firebaseapp.com",
  projectId: "authentify-c4bb1",
  storageBucket: "authentify-c4bb1.appspot.com",
  messagingSenderId: "672304318342",
  appId: "1:672304318342:web:d82b04b2369692185fce07",
  measurementId: "G-5VMG9SBG6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)