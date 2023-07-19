// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDeOvJgjPAU5k_El9WOhU8MIiSF7WyyWc",
  authDomain: "wave-2a64e.firebaseapp.com",
  projectId: "wave-2a64e",
  storageBucket: "wave-2a64e.appspot.com",
  messagingSenderId: "736675041279",
  appId: "1:736675041279:web:e9ebf9064a52c0e29361ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);