import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// money2022
const firebaseConfig = {
  apiKey: 'AIzaSyDUSJ5yzHvTCCSQTuONsPtOBGodjamReHc',
  authDomain: 'money2022-173b9.firebaseapp.com',
  projectId: 'money2022-173b9',
  storageBucket: 'money2022-173b9.appspot.com',
  messagingSenderId: '944583877759',
  appId: '1:944583877759:web:0fd8a43af8a727a76c0b4a',
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// echoway
const firebaseConfig_echoway = {
  apiKey: "AIzaSyA4DYkA83scraoKDxszh773vMHpfzsUmHY",
  authDomain: "echoway-914b5.firebaseapp.com",
  projectId: "echoway-914b5",
  storageBucket: "echoway-914b5.appspot.com",
  messagingSenderId: "733933772574",
  appId: "1:733933772574:web:46d4078ca0c47d9efcb30f",
  measurementId: "G-8QFMQCJ28H"
};

const app_echoway = firebase.initializeApp(firebaseConfig_echoway,"echoway");
const db_echoway = app_echoway.firestore();

export { db, db_echoway };
