import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { firebase } from "./Firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0.5),
    margin: theme.spacing(7),
    textAlign: 'left',
  }
}));

const firestore = firebase.firestore();
const auth = firebase.auth();

const ref = firestore.collection("presents");


const MyList = () => {
  const classes = useStyles();
  const [presents, setPresents] = useState([]);
  ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPresents(items);
    });

  

  var html = presents.map ( present => 
      <Paper key={present.id} className={classes.root, classes.paper}>
        <h1>{present.name}</h1>
        <h3>{present.info}</h3>
      </Paper>
      );

  return html;
};

export default MyList;