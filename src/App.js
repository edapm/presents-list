import React from "react";
import ReactDOM from "react-dom";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from "react-firebase-hooks/auth";
import LoggedIn from "./LoggedIn";
import SignIn from "./SignIn";

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

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <LoggedIn /> : <SignIn />}
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
