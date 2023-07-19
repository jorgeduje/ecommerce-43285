import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCFD8bsufwBhavP17W8Eg8uoguJhhU8su4",
  authDomain: "comision-43285.firebaseapp.com",
  projectId: "comision-43285",
  storageBucket: "comision-43285.appspot.com",
  messagingSenderId: "698775587210",
  appId: "1:698775587210:web:0e58297fd4d37125832073"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)