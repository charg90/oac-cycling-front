import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDnLaPcY9OPtsPtzvBtTwHefdWME4qi62I",
  authDomain: "api-oscar-cycling.firebaseapp.com",
  projectId: "api-oscar-cycling",
  storageBucket: "api-oscar-cycling.appspot.com",
  messagingSenderId: "1057683320816",
  appId: "1:1057683320816:web:a46a3f733c5294cacd7735",
  measurementId: "G-9HPF659Y64",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);

