import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAaocvICf4iYnXb3VoNWmqw0H35DG9y0BQ",
  authDomain: "acelogic-6093b.firebaseapp.com",
  projectId: "acelogic-6093b",
  storageBucket: "acelogic-6093b.appspot.com",
  messagingSenderId: "137372992643",
  appId: "1:137372992643:web:c71a51ab25c6059901c7b6",
  measurementId: "G-6GEYJ0F23P"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();