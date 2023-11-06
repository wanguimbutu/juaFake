import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig={
    apiKey: "AIzaSyBGcAGyjQcN52CFML8a6V9gsipoDKauwUg",
  authDomain: "authentify-c4bb1.firebaseapp.com",
  projectId: "authentify-c4bb1",
  storageBucket: "authentify-c4bb1.appspot.com",
  messagingSenderId: "672304318342",
  appId: "1:672304318342:web:d82b04b2369692185fce07",
  measurementId: "G-5VMG9SBG6P"
}
const app =initializeApp(firebaseConfig)

export const auth =  getAuth(app);
export default app;