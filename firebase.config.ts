import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxjlE8ijBg5nh4vzM9ETEaOignWiYXkBM",
  authDomain: "smart-95d4a.firebaseapp.com",
  projectId: "smart-95d4a",
  storageBucket: "smart-95d4a.firebasestorage.app",
  messagingSenderId: "20782961512",
  appId: "1:20782961512:web:5717ab37753cec8ef87cdd",
  measurementId: "G-7Q56B143H4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
