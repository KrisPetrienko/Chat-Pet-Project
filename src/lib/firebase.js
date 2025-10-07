import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-83cb4.firebaseapp.com",
  projectId: "reactchat-83cb4",
  storageBucket: "reactchat-83cb4.firebasestorage.app",
  messagingSenderId: "637764905701",
  appId: "1:637764905701:web:109f18d42743f5f2af420c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()