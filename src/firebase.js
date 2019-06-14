import firebase from "firebase/app";

import 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBOHXY8AK5Fo1LRofRPPfLJDppUAMhGiNw",
    authDomain: "man-city-aa4c3.firebaseapp.com",
    databaseURL: "https://man-city-aa4c3.firebaseio.com",
    projectId: "man-city-aa4c3",
    storageBucket: "man-city-aa4c3.appspot.com",
    messagingSenderId: "174414565650",
    appId: "1:174414565650:web:dcc1d873700052c0"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database()

firebaseDB.ref('matches').once('value').then((snapshot)=>{
  console.log(snapshot.val());
})
