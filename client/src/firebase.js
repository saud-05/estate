// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-41214.firebaseapp.com",
  projectId: "estate-41214",
  storageBucket: "estate-41214.appspot.com",
  messagingSenderId: "1040194570553",
  appId: "1:1040194570553:web:ecf7b691af1950003100e8",
  measurementId: "G-7TDR9DKVV5"
};
console.log("apiKey")
export const app = initializeApp(firebaseConfig);


