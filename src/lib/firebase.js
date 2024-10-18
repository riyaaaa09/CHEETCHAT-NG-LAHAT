import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY, // Accessing the environment variable
  authDomain: "cctech-77c87.firebaseapp.com",
  projectId: "cctech-77c87",
  storageBucket: "cctech-77c87.appspot.com",
  messagingSenderId: "885273100396",
  appId: "1:885273100396:web:92a9bf9ed826090fb85849"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
