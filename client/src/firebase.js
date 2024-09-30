// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-fadf3.firebaseapp.com",
  projectId: "realestate-fadf3",
  storageBucket: "realestate-fadf3.appspot.com",
  messagingSenderId: "609316131944",
  appId: "1:609316131944:web:bf8411477eaf485c0217dd"
};
console.log("apiKey")
export const app = initializeApp(firebaseConfig);


