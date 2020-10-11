import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import * as firebase from "firebase/app";
import "firebase/auth";


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