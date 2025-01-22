// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxao7RZZ8uMFn3IghOgmxfClMV3XRaMyM",
  authDomain: "nextjs-kerr.firebaseapp.com",
  projectId: "nextjs-kerr",
  storageBucket: "nextjs-kerr.firebasestorage.app",
  messagingSenderId: "30071507522",
  appId: "1:30071507522:web:2d9932f35517be5023bbdb",
  measurementId: "G-BBFDBD4ZKF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
