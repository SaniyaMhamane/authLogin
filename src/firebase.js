import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDttOYO3oYLJgE-jxu9KtwBQjRJdVmE1bQ",
  authDomain: "react-authentication-354e8.firebaseapp.com",
  projectId: "react-authentication-354e8",
  storageBucket: "react-authentication-354e8.appspot.com",
  messagingSenderId: "378907796366",
  appId: "1:378907796366:web:39d48e2306a340b54ebadf",
  measurementId: "G-JCEZXDYN21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;