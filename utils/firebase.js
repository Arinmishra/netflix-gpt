// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA02qVvNsLelA-0k7wGomX4AD9518Or6E",
  authDomain: "netflix-gpt-62ca8.firebaseapp.com",
  projectId: "netflix-gpt-62ca8",
  storageBucket: "netflix-gpt-62ca8.firebasestorage.app",
  messagingSenderId: "716294137165",
  appId: "1:716294137165:web:90f4b6cbb3c55fd0ff8304",
  measurementId: "G-B8Z3NFSCGJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
