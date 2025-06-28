// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// TODO: Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDu1jrQdCBKtmzyqPycDl1x41BtVCeTLEw",
  authDomain: "todo-manager-portfolio-2025.firebaseapp.com",
  projectId: "todo-manager-portfolio-2025",
  storageBucket: "todo-manager-portfolio-2025.firebasestorage.app",
  messagingSenderId: "189412642520",
  appId: "1:189412642520:web:60852272296049158651ad",
  measurementId: "G-SHN8J4FSSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
