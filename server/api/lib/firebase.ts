
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCdq074luNgmUJfc6nfhAY1dqz4gtxvahw",

  authDomain: "chattymix-90310.firebaseapp.com",

  projectId: "chattymix-90310",

  storageBucket: "chattymix-90310.appspot.com",

  messagingSenderId: "894065099890",

  appId: "1:894065099890:web:68c2973bdd48fc3f706eeb",

  measurementId: "G-5L6GMV87ES"

};

const app = initializeApp(firebaseConfig);

const fireStoreDb = getFirestore(app);
const fireAuth = getAuth(app);

export{
    fireStoreDb,fireAuth
}