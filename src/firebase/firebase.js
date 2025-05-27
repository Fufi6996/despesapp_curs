//import { firebaseConfig } from "./config"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, addDoc, collection, getDocs, onSnapshot, doc, deleteDoc } from "firebase/firestore"
//import { getFirestore, addDoc, collection, getDocs, onSnapshot, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-firestore.js"
import { } from 'firebase/auth'; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyBoZf93AbZtPaJ501k4vbm7h59kKawYBF8",
  authDomain: "dbdespeses.firebaseapp.com",
  projectId: "dbdespeses",
  storageBucket: "dbdespeses.firebasestorage.app",
  messagingSenderId: "1098314871318",
  appId: "1:1098314871318:web:cb1544c56bd6a1c1ff3b37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const saveDespesa = async (despesa) => {
  console.log(despesa);
  const docRef = await addDoc(collection(db, "despeses"), despesa);

  return docRef.id;   
}

export const getDespeses = () => 
  getDocs(collection(db, "despeses"));

export const onGetDespeses = (callback) =>
  onSnapshot(collection(db, "despeses"), callback);

export const deleteDespesa = async (id) => {
  deleteDoc(doc(db, "despeses", id));
}
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };