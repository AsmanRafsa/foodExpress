// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import getAuth from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9UiUyuG9NNP2baMie9_n09scOjlZVgO8",
  authDomain: "foodexpress-9f292.firebaseapp.com",
  projectId: "foodexpress-9f292",
  storageBucket: "foodexpress-9f292.appspot.com",
  messagingSenderId: "167682094887",
  appId: "1:167682094887:web:6e10f69abc7038bbb01b02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
