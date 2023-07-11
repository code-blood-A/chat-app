import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA64SdLfyk3NyLxYM9dYAYbdmvoRRjSJJI",
  authDomain: "chat-18790.firebaseapp.com",
  projectId: "chat-18790",
  storageBucket: "chat-18790.appspot.com",
  messagingSenderId: "861176620526",
  appId: "1:861176620526:web:0471f7ecce9901d6145aff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
