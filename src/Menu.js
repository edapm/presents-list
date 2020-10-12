import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import * as firebase from "firebase/app";
import "firebase/auth";

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

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return auth.currentUser && (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="My List" icon={<AccountCircleIcon />} />
      <BottomNavigationAction label="Other Lists" icon={<ListIcon />} />
      <BottomNavigationAction label="Logout" onClick={() => auth.signOut()} icon={<ExitToAppIcon />} />
    </BottomNavigation>
  );
};

export default Menu;