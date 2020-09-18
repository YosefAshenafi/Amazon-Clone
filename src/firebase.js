import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB11CtDrTOsLyclDpL3gWd1-8m-gHXvmco",
  authDomain: "fir-a3f16.firebaseapp.com",
  databaseURL: "https://fir-a3f16.firebaseio.com",
  projectId: "fir-a3f16",
  storageBucket: "fir-a3f16.appspot.com",
  messagingSenderId: "978915909447",
  appId: "1:978915909447:web:c4fc18c99aaa99950db662",
  measurementId: "G-VGZ88S8YPY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
