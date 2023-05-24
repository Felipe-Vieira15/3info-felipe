// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1qKZhnC1NRjzyBuos7RzBXUEnWjheFMM",
  authDomain: "info-felipe.firebaseapp.com",
  projectId: "info-felipe",
  storageBucket: "info-felipe.appspot.com",
  messagingSenderId: "143381046793",
  appId: "1:143381046793:web:a9409c0038367459723ad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)