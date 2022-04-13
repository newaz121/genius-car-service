// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB29IrNL250pXiXZ9lIiIy6TJJD_VpG_p0",
  authDomain: "genius-car-services-52fda.firebaseapp.com",
  projectId: "genius-car-services-52fda",
  storageBucket: "genius-car-services-52fda.appspot.com",
  messagingSenderId: "140882823786",
  appId: "1:140882823786:web:7595ee732413b97e955813"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;