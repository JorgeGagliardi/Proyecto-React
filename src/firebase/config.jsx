// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMqrUOkoeDpYl-nEgh8f9QcoX2aLEflLY",
  authDomain: "espaciojardin-97b4a.firebaseapp.com",
  projectId: "espaciojardin-97b4a",
  storageBucket: "espaciojardin-97b4a.appspot.com",
  messagingSenderId: "605346130698",
  appId: "1:605346130698:web:c263133397fb480377a8f3",
  measurementId: "G-PG5VW6XN08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
