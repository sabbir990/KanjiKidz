// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEzicavIorPtMfg2qP0DVfVXzLh2GThrw",
  authDomain: "kanjikidz.firebaseapp.com",
  projectId: "kanjikidz",
  storageBucket: "kanjikidz.firebasestorage.app",
  messagingSenderId: "542232207554",
  appId: "1:542232207554:web:4121f1e3c813e6388b9b5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;