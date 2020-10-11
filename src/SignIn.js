import React from "react";
import * as firebase from "firebase/app";
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Header from "./Header";


const uiConfig = {
  
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ]
};

const SignIn = () => {
    return (
        <div>
        <Header></Header>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    )
}


export default SignIn;