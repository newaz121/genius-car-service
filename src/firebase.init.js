// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXlwRxFNTsOU8tXhGfv8XAgm3Y-h5CLNM",
  authDomain: "genius-car-b2774.firebaseapp.com",
  projectId: "genius-car-b2774",
  storageBucket: "genius-car-b2774.appspot.com",
  messagingSenderId: "746540647420",
  appId: "1:746540647420:web:fcdd5f17540c4a1a61e879",
  measurementId: "G-1HX5CPD2KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;