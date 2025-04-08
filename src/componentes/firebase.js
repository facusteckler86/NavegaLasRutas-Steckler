import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA15NqoafnLX55gQUEJFLTlttdeYMUHgrc",
  authDomain: "panaderia-dona-pepa.firebaseapp.com",
  projectId: "panaderia-dona-pepa",
  storageBucket: "panaderia-dona-pepa.firebasestorage.app",
  messagingSenderId: "1058910613471",
  appId: "1:1058910613471:web:43d4719c4f598345c35e6a",
  measurementId: "G-M4HG6RN45W",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Get items
export async function getItems() {
  const querysnapshot = await getDocs(collection(db, "items"));
  return querysnapshot.docs.map((doc) => doc.data());
}

