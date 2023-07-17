// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCcwLU2OcSosxeUD64yQjG8bJYHFODWj_g",
    authDomain: "sanchit-poudel.firebaseapp.com",
    projectId: "sanchit-poudel",
    storageBucket: "sanchit-poudel.appspot.com",
    messagingSenderId: "977153604005",
    appId: "1:977153604005:web:461fe0138665a8e1a9904c",
    measurementId: "G-62CSW2PY7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);