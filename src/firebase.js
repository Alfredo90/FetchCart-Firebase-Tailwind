// Import the functions you need from the SDKs you need
import { useState, useEffect } from 'react'
import { initializeApp } from "firebase/app";
import{ getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAexSyQlYgBsmPWb-7GTBm2pX2d5NPprs",
  authDomain: "fetch-cart-auth.firebaseapp.com",
  projectId: "fetch-cart-auth",
  storageBucket: "fetch-cart-auth.appspot.com",
  messagingSenderId: "931856778243",
  appId: "1:931856778243:web:217b94fa91889a9e9fba36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth()

export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password)
}
export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password)
}
export function logout() {
  return signOut(auth)
}

//Custom Hook
export function useAuth() {
const [ currentUser, setCurrentUser ] = useState()
useEffect(() => {
 const unsub = onAuthStateChanged(auth, user => setCurrentUser(user)) 
 return unsub

}, [])
return currentUser
} 