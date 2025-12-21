import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc0SJi8IRwZsOuuejiVtWGYiL7O8wBl7U",
  authDomain: "elzipo-ff8fc.firebaseapp.com",
  projectId: "elzipo-ff8fc",
  storageBucket: "elzipo-ff8fc.firebasestorage.app",
  messagingSenderId: "789472771008",
  appId: "1:789472771008:web:1d3a1461a3d2c6fcf4a625",
};

// Debug: Log if env vars are loaded (remove in production)
if (!firebaseConfig.apiKey) {
  console.error("Firebase config error: VITE_FIREBASE_API_KEY is not set!");
  console.log(
    "Available env keys:",
    Object.keys(import.meta.env).filter((k) => k.includes("FIREBASE"))
  );
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
