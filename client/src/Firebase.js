// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-7c855.firebaseapp.com",
  projectId: "mernestate-7c855",
  storageBucket: "mernestate-7c855.appspot.com",
  messagingSenderId: "898445644243",
  appId: "1:898445644243:web:0e8cd93de0f2fc407f5f26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);