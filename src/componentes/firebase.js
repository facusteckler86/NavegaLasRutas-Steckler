// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getDocs, collection } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA15NqoafnLX55gQUEJFLTlttdeYMUHgrc",
  authDomain: "panaderia-dona-pepa.firebaseapp.com",
  projectId: "panaderia-dona-pepa",
  storageBucket: "panaderia-dona-pepa.firebasestorage.app",
  messagingSenderId: "1058910613471",
  appId: "1:1058910613471:web:43d4719c4f598345c35e6a",
  measurementId: "G-M4HG6RN45W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

const dataBase = getFirestore(app);

export async function getItems(){

    const querysnapshot = await getDocs(collection(dataBase, 'items'));
    querysnapshot.forEach((doc) => {`${doc.id} => ${doc.data()}`});
    return querysnapshot .docs.map(doc => doc.data());
}