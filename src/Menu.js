import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Container from '@material-ui/core/Container';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Init } from "./Firebase";

Init();

const auth = firebase.auth();

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: '0',
    overflow: 'hidden',
  },
});

const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return auth.currentUser && (
    <Container maxWidth="lg" className={classes.root}>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="My List" icon={<AccountCircleIcon />} />
      <BottomNavigationAction label="Other Lists" icon={<ListIcon />} />
      <BottomNavigationAction label="Logout" onClick={() => auth.signOut()} icon={<ExitToAppIcon />} />
    </BottomNavigation>
    </Container>
  );
};

export default Menu;