import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAO89o6_5RQVDAQy7yfwrpfWbOCwqjLrcE",
    authDomain: "ynan-2d8f7.firebaseapp.com",
    databaseURL: "https://ynan-2d8f7-default-rtdb.firebaseio.com",
    projectId: "ynan-2d8f7",
    storageBucket: "ynan-2d8f7.appspot.com",
    messagingSenderId: "583393073957",
    appId: "1:583393073957:web:8a0750f45661be60b098cc",
    measurementId: "G-L4EBGPCJ1F"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);