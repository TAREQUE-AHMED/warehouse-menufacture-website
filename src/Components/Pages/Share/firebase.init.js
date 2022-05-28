// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIxzwyg-hYmXa_oryPsK9_MeSTNRMMZr4",
  authDomain: "laptop-manufacture.firebaseapp.com",
  projectId: "laptop-manufacture",
  storageBucket: "laptop-manufacture.appspot.com",
  messagingSenderId: "293392458623",
  appId: "1:293392458623:web:446cd0528725d3b85f704a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;