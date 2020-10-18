import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Init } from "./Firebase";
import Header from "./Header";

Init();

const auth = firebase.auth();

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return auth.currentUser && (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        <Header></Header>&nbsp;
        <Tab label="My List" icon={<AccountCircleIcon/>} />
        <Tab label="Other Lists"icon={<ListIcon />} />
        <Tab label="Logout" onClick={() => auth.signOut()} icon={<ExitToAppIcon />} />
      </Tabs>
    </Paper>
  );
};

export default Menu;