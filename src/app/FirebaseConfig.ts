import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAY2vkVWpSoJTXzW39dtnbquXvQPyffmLg",
  authDomain: "zenskavizija-88ec6.firebaseapp.com",
  projectId: "zenskavizija-88ec6",
  storageBucket: "zenskavizija-88ec6.appspot.com",
  messagingSenderId: "869760356643",
  appId: "1:869760356643:web:88722cabb75e8444963c96",
  measurementId: "G-R2K4F9KZ0E"
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app); // s obzirom da cemo koristiti auth, moramo ga importovati i upotrijebiti
const db = getFirestore(app);
const storage = getStorage(app);

export {app, auth, db, storage} // koristit cemo oba, "app" za samu inicijalizaciju sa firebase i "auth" za auth login