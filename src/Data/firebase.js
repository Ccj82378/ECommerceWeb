import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCs2AGa23TwajEXCtI6UwS0xjoIVlnZOgs",
    authDomain: "ecommerceweb-264ef.firebaseapp.com",
    databaseURL: "https://ecommerceweb-264ef.firebaseio.com",
    projectId: "ecommerceweb-264ef",
    storageBucket: "ecommerceweb-264ef.appspot.com",
    messagingSenderId: "814706071550",
    appId: "1:814706071550:web:0a48b90b8398922bc092af",
    measurementId: "G-CBPKH3MNLZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };