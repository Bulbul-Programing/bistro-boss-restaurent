// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARoauCRY0Mes1REJUps11tZYNkRsofEpQ",
  authDomain: "bistro-boss-restorent.firebaseapp.com",
  projectId: "bistro-boss-restorent",
  storageBucket: "bistro-boss-restorent.appspot.com",
  messagingSenderId: "725936965203",
  appId: "1:725936965203:web:83086f3526748e256528a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth