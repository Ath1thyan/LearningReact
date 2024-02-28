import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDxjUIZgtkCp3nImH_8aGQvqdpoHETjxsk",
  authDomain: "fir-demo-b0888.firebaseapp.com",
  projectId: "fir-demo-b0888",
  storageBucket: "fir-demo-b0888.appspot.com",
  messagingSenderId: "29555379892",
  appId: "1:29555379892:web:1166bf6073dcc7f76411e1",
  measurementId: "G-07C5HX48JY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);