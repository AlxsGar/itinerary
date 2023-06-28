// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk9_x_vgZcbbvJMBQ7SOJ5xjsmBSb2ixs",
  authDomain: "uvaqschedule.firebaseapp.com",
  projectId: "uvaqschedule",
  storageBucket: "uvaqschedule.appspot.com",
  messagingSenderId: "144416982980",
  appId: "1:144416982980:web:059a333cf3374cd54fc691",
  measurementId: "G-8SWZCNHHN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const firestore = getFirestore(app);