// src/main.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAz9Q8MhozTVfyLpon2GLhnDUarAh4cT9Q",
  authDomain: "agencia-babel-bc057.firebaseapp.com",
  projectId: "agencia-babel-bc057",
  storageBucket: "agencia-babel-bc057.firebasestorage.app",
  messagingSenderId: "676741035339",
  appId: "1:676741035339:web:e178f68351e12ae6e664ce",
  measurementId: "G-V784W6F19F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
// Ahora podés usar `db` para interactuar con Firestore