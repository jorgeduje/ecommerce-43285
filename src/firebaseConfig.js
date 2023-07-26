import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY ,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET ,
  messagingSenderId:import.meta.env.VITE_MESSAGING ,
  appId: import.meta.env.VITE_APPID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)