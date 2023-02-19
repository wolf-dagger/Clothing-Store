import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpOCAFaOu4-wGM5zKdpJYTSYQtL_nlnaQ",
  authDomain: "clothing-store-data.firebaseapp.com",
  projectId: "clothing-store-data",
  storageBucket: "clothing-store-data.appspot.com",
  messagingSenderId: "530857878495",
  appId: "1:530857878495:web:302ef699e1c3a692805a6a",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
