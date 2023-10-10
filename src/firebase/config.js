// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsKfsSCZ2G6THDeQS2j2h3Ssb57U4_COY",
  authDomain: "login-cobrecol.firebaseapp.com",
  projectId: "login-cobrecol",
  storageBucket: "login-cobrecol.appspot.com",
  messagingSenderId: "718439392465",
  appId: "1:718439392465:web:b551d0d61ad76dd38891f0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);   
export const FirebaseAuth = getAuth (FirebaseApp);
export const firestoreDB = getFirestore(FirebaseApp);