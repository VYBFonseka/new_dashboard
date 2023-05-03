import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/database"


import { getFirestore} from "@firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBvdkPDqdb8J0LFAl-p-AToIBGC_uY4t9s",
    authDomain: "fyp-adas.firebaseapp.com",
    databaseURL: "https://fyp-adas-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fyp-adas",
    storageBucket: "fyp-adas.appspot.com",
    messagingSenderId: "55936319238",
    appId: "1:55936319238:web:cc773ba3cd4e192265a887"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const realdb = getDatabase(app);
  export const storedb = getFirestore(app);
