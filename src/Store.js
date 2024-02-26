// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXS5lvr6R3Z7mvN-U5rKJ_s2cu3l80OmE",
  authDomain: "ecommerce-3e86c.firebaseapp.com",
  projectId: "ecommerce-3e86c",
  storageBucket: "ecommerce-3e86c.appspot.com",
  messagingSenderId: "140451161715",
  appId: "1:140451161715:web:c1952fc8dd5838b0abec06"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export  {app}