import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB0oLy7iJ8g7KmfdBlX7MpJmKCss3ZZFCE",
  authDomain: "facebook-messenger-clone-4869f.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-4869f.firebaseio.com",
  projectId: "facebook-messenger-clone-4869f",
  storageBucket: "facebook-messenger-clone-4869f.appspot.com",
  messagingSenderId: "426854794805",
  appId: "1:426854794805:web:41cea271761e007d40537c",
  measurementId: "G-C5CSTPXR1T",
});

const db = firebaseApp.firestore();

export default db;
