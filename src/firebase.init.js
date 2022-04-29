// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxHtoB1dXI9Ik8EUHPr2LxZ0FMPgdUSVY",
  authDomain: "car-inventory-auth.firebaseapp.com",
  projectId: "car-inventory-auth",
  storageBucket: "car-inventory-auth.appspot.com",
  messagingSenderId: "184018706557",
  appId: "1:184018706557:web:d70a1841594fcfe93bd114",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
