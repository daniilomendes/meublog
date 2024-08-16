import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-4b742.firebaseapp.com",
  projectId: "blog-4b742",
  storageBucket: "blog-4b742.appspot.com",
  messagingSenderId: "542625541444",
  appId: "1:542625541444:web:360d4f2f4016755a2cfb11",
};

export const app = initializeApp(firebaseConfig);
