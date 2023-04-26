// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrByUtaYvHXfDzsBY9OO_fqfm4M4Pq1UE",
  authDomain: "randompokamons.firebaseapp.com",
  projectId: "randompokamons",
  storageBucket: "randompokamons.appspot.com",
  messagingSenderId: "844065739712",
  appId: "1:844065739712:web:8c8e42e064a2284bf6ae25",
  measurementId: "G-4W8YQTELK6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
