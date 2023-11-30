import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBz7mlKi5wqVm_yi42UgI2mMRdCoe5m7io",
    authDomain: "e-ride-stage-9c812.firebaseapp.com",
    projectId: "e-ride-stage-9c812",
    storageBucket: "e-ride-stage-9c812.appspot.com",
    messagingSenderId: "129580797501",
    appId: "1:129580797501:web:d0b23aed25d79ed104a454"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


