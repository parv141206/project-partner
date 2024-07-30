"use client";
// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5zt43-Xl-X49O3dwwJVcSXKCwvilrKMA",
  authDomain: "project-partner-e3155.firebaseapp.com",
  projectId: "project-partner-e3155",
  storageBucket: "project-partner-e3155.appspot.com",
  messagingSenderId: "844915239270",
  appId: "1:844915239270:web:0a1545e6d387df9f1d00a7",
  measurementId: "G-7XG0V9NNRS",
};
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
