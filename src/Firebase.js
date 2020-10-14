import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const Init = () => {
firebase.initializeApp({
  apiKey: "AIzaSyAAnZX-4yQz4gPdYfOOBqGsiejhs76wEyY",
  authDomain: "react-presents-list.firebaseapp.com",
  databaseURL: "https://react-presents-list.firebaseio.com",
  projectId: "react-presents-list",
  storageBucket: "react-presents-list.appspot.com",
  messagingSenderId: "1059174120791",
  appId: "1:1059174120791:web:1fad922d3ad458d9fe5212",
  measurementId: "G-HG8Z6K1BHL"
})
}

Init();

export default firebase;