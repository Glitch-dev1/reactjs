// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcvPMXSdK6NRrccgGL4vzkE6UDyNqrgto",
  authDomain: "arputha-theevurp.firebaseapp.com",
  projectId: "arputha-theevurp",
  storageBucket: "arputha-theevurp.appspot.com",
  messagingSenderId: "164575486407",
  appId: "1:164575486407:web:5c19cf630694609c3339e2",
  measurementId: "G-85698QQDY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = app.firestore()

export default auth
export {db}