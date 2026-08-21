import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCaYjRdWScIrwx0vn9qzxiWPtYJmnUkvjs",
  authDomain: "chisendproduction009.firebaseapp.com",
  databaseURL: "https://chisendproduction009-default-rtdb.firebaseio.com",
  projectId: "chisendproduction009",
  storageBucket: "chisendproduction009.firebasestorage.app",
  messagingSenderId: "754645863576",
  appId: "1:754645863576:web:e51c04c78746ea643dd4ed",
  measurementId: "G-2KDTKVHNPF"
};



const app = initializeApp(firebaseConfig);

// Initialize Firebase services using the modular SDK
const db = getDatabase(app);

// Initialize Firebase Auth with React Native persistence
const auth = getAuth(app);

export { db, auth };


