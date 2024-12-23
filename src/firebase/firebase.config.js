// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT9-K00QlThAgedjSlJlQh1HUh8iXpLXY",
  authDomain: "artifacts-tracker-84d4a.firebaseapp.com",
  projectId: "artifacts-tracker-84d4a",
  storageBucket: "artifacts-tracker-84d4a.firebasestorage.app",
  messagingSenderId: "342420739712",
  appId: "1:342420739712:web:64e5317878b598d4767865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);