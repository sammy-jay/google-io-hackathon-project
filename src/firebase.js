import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAg6cLUKThR5UEhjZFhzlxnrHJbxDbhr3E",
  authDomain: "io-hackathon-farmx.firebaseapp.com",
  projectId: "io-hackathon-farmx",
  storageBucket: "io-hackathon-farmx.appspot.com",
  messagingSenderId: "719078074132",
  appId: "1:719078074132:web:efbebfb2bb91e6bf6f0401",
  measurementId: "G-B976D2871T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
