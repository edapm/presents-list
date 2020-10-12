import React from "react";
import ReactDOM from "react-dom";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import LoggedIn from "./LoggedIn";
import SignIn from "./SignIn";

const auth = firebase.auth();

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <LoggedIn /> : <SignIn />}
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));
