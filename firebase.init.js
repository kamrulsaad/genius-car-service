// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxewCgIZZiM5MuKWpV6O3RBsoDcHZyMBI",
  authDomain: "genius-car-services-10ca1.firebaseapp.com",
  projectId: "genius-car-services-10ca1",
  storageBucket: "genius-car-services-10ca1.appspot.com",
  messagingSenderId: "489188634583",
  appId: "1:489188634583:web:75e455fa26d8fe794fa592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;