// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "file-shareing-23.firebaseapp.com",
    projectId: "file-shareing-23",
    storageBucket: "file-shareing-23.appspot.com",
    messagingSenderId: "901273944477",
    appId: "1:901273944477:web:f107792ad25ff1c52bef74",
    measurementId: "G-NK38GN6CMH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);