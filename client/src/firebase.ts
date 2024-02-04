/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBe3qqPKjIAgYhsPWnD3B1PYIzNh7XnYhM",
  authDomain: "clone-972dc.firebaseapp.com",
  projectId: "clone-972dc",
  storageBucket: "clone-972dc.appspot.com",
  messagingSenderId: "381528271988",
  appId: "1:381528271988:web:28d92e54f68c8fb7b77521",
  measurementId: "G-VK9PJ3E6G3",
};

//const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
