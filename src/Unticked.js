import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { firebase } from "./Firebase";

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


const Unticked = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const classes = useStyles();
  const [presents, setPresents] = useState([]);
  const { uid } = auth.currentUser;
  const query = ref.where("uid", "!=", uid).where("tickuid", "!=", null);

  query.get().then(function (querySnapshot) {
    const items = [];
    querySnapshot.forEach(function (doc) {
      items.push(doc.data());
    });
    setPresents(items);
  });

  const tickPresent = id => {
    ref.doc(`${id}`).update(
    {tickuid: uid})
  }

  var html = presents.map (present =>
      <Paper key={present.id} id={present.id} className={classes.root, classes.paper}>
        <h1>{present.name}</h1>
        <h2>£{present.price}</h2>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          onClick={tickPresent(present.id)}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </Paper>
      );

  return (
    <div>
      <h1>Unticked</h1>
    </div>
  ), html;
};

export default Unticked;