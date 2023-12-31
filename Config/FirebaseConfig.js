// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FirebaseApiKey,
  authDomain: "test-project-in-nextjs.firebaseapp.com",
  projectId: "test-project-in-nextjs",
  storageBucket: "test-project-in-nextjs.appspot.com",
  messagingSenderId: "542894375070",
  appId: "1:542894375070:web:f6f7a3ade9d44792c8bb8f",
  measurementId: "G-M0K63E3VFS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


 