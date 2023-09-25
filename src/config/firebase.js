// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import {getFirestore, collection} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSYOwTOMEg7pzKUBJwJc-3WF7CFnMQs_8",
  authDomain: "fruzz-53975.firebaseapp.com",
  projectId: "fruzz-53975",
  storageBucket: "fruzz-53975.appspot.com",
  messagingSenderId: "1075129546092",
  appId: "1:1075129546092:web:4826f3e26821d5a558af49",
  measurementId: "G-MG96RJPKYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsref = collection(db, "trips")
export const expensesRef = collection(db, "expenses")

export default app;