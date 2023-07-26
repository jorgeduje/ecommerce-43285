import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING,
  appId: import.meta.env.VITE_APPID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

// ESTO VA EN EL ONSUBMIT DEL FORMULARIO DE LOGIN
export const login = async ({ email, password }) => {
  let res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

// ESTO VA EN EL ONSUBMIT DEL FORMULARIO DE registro
export const register = async({email,password}) => {
  let res = await createUserWithEmailAndPassword(auth, email, password)
  return res
};

let proveedorDeGoogle = new GoogleAuthProvider()

export const ingresarConGoogle = async ()=>{
  let res = await signInWithPopup(auth,proveedorDeGoogle )
  return res  
}

// {/* <button onClick={ingresarConGoogle}>Google</button> */}


// input -- email
//  input  --- passowrd

//  onsubmit()=>{
//    let resultado = register({email: "pepee", password: 1234})
// if(resultado.accessToken){
  // login()
// }else{

// }
//  }
