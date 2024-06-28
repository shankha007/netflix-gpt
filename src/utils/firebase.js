// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7GCPlJr5k7lIN6ZXou1miGfKp9-F9fkU",
  authDomain: "netflixgpt-a1620.firebaseapp.com",
  projectId: "netflixgpt-a1620",
  storageBucket: "netflixgpt-a1620.appspot.com",
  messagingSenderId: "938956262486",
  appId: "1:938956262486:web:2b9502962d47b858433ff7",
  measurementId: "G-6Y0RFT2QD5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
