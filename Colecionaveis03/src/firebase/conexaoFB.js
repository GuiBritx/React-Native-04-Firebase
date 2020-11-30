 import firebase from 'firebase';
 import 'firebase/firestore';
 
 const firebaseConfig = {
    apiKey: "AIzaSyCRODSrGvs9pNM9HCpi_L6FzDNbHUzq2Ts",
    authDomain: "colecionaveisfb-cf03e.firebaseapp.com",
    databaseURL: "https://colecionaveisfb-cf03e.firebaseio.com",
    projectId: "colecionaveisfb-cf03e",
    storageBucket: "colecionaveisfb-cf03e.appspot.com",
    messagingSenderId: "868169542511",
    appId: "1:868169542511:web:3bfe89945d6c8c4fea969a",
    measurementId: "G-37G8F8YM5S"
  };
  
  var app = firebase.initializeApp(firebaseConfig);
  export const conexaoFS = app.firestore();