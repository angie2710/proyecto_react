import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcgL-fxpYk5GMhyA1jYBxVpFn7igrs0P8",
  authDomain: "proyecto-react-d0996.firebaseapp.com",
  projectId: "proyecto-react-d0996",
  storageBucket: "proyecto-react-d0996.firebasestorage.app",
  messagingSenderId: "841835431766",
  appId: "1:841835431766:web:770a6c4e5ca9667c3af8f7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();