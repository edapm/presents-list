import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import { firebase } from "./Firebase";
import { Init } from "./Firebase";

Init();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0.5),
    margin: theme.spacing(7),
    textAlign: 'left',
  },
  delete: {
    textAlign: 'left',
  }
}));

const firestore = firebase.firestore();
const auth = firebase.auth();

const ref = firestore.collection("presents");


const MyList = () => {
  const classes = useStyles();
  const [presents, setPresents] = useState([]);
  const { uid } = auth.currentUser;
  const query = ref.where("uid", "==", uid);

  query.get().then(function (querySnapshot) {
    const items = [];
    querySnapshot.forEach(function (doc) {
      items.push(doc.data());
    });
    setPresents(items);
  });

  const delPresent = id => {
    ref.doc(`${id}`).delete();
  }

  var html = presents.map ( present => 
      <Paper key={present.id} id={present.id} className={classes.root, classes.paper}>
        <h1>{present.name}</h1>
        <h2>£{present.price}</h2>
        <IconButton onClick={() => { delPresent(present.id) }}><CancelIcon></CancelIcon></IconButton>
      </Paper>
      );

  return html;
};

export default MyList;