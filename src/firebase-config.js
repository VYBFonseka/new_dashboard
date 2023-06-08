import "firebase/firestore"
import "firebase/database"
import { initializeApp } from "firebase/app";


import { getFirestore} from "@firebase/firestore";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
    /* apiKey: "AIzaSyBvdkPDqdb8J0LFAl-p-AToIBGC_uY4t9s",
    authDomain: "fyp-adas.firebaseapp.com",
    databaseURL: "https://fyp-adas-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fyp-adas",
    storageBucket: "fyp-adas.appspot.com",
    messagingSenderId: "55936319238",
    appId: "1:55936319238:web:cc773ba3cd4e192265a887" */

  apiKey: "AIzaSyBU3MRltjt8UL268ejuvgrOY5zcYRanwtQ",
  authDomain: "fyp04-2023.firebaseapp.com",
  databaseURL: "https://fyp04-2023-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fyp04-2023",
  storageBucket: "fyp04-2023.appspot.com",
  messagingSenderId: "658209007271",
  appId: "1:658209007271:web:8bd65836aec74370191d82",
  measurementId: "G-9R0VKS6EY4"
  };

  const app = initializeApp(firebaseConfig);

  export const realdb = getDatabase(app);
  export const storedb = getFirestore(app);
