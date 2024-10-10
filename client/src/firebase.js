// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-ae37d.firebaseapp.com",
  projectId: "blog-app-ae37d",
  storageBucket: "blog-app-ae37d.appspot.com",
  messagingSenderId: "955546344165",
  appId: "1:955546344165:web:b8ddc374dd32e1167d920c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

