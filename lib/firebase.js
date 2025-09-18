// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO0mwqMntm5Im9_BxFCk06IUcEfdc38nQ",
  authDomain: "traff-iq-6a4bd.firebaseapp.com", // fixed
  projectId: "traff-iq-6a4bd",
  storageBucket: "traff-iq-6a4bd.appspot.com", // fixed
  messagingSenderId: "899489380891",
  appId: "1:899489380891:web:b601ee5fef4eb1385c96be",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
