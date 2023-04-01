import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAxLqYAQSiBRcFzy6di34B_G2MytNRMv3Q",
  authDomain: "tiktak---jornada.firebaseapp.com",
  projectId: "tiktak---jornada",
  storageBucket: "tiktak---jornada.appspot.com",
  messagingSenderId: "46297153608",
  appId: "1:46297153608:web:726c86813fecdfbde1d87d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;