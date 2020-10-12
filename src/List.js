import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import MyList from "./MyList";

const firestore = firebase.firestore();
const auth = firebase.auth();

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const List = () => {
  const classes = useStyles();
  const dummy = useRef();
  const listRef = firestore.collection('presents-list');

  const [formValue, setFormValue] = useState('');

  const addPresent = async (e) => {
    e.preventDefault();

    const uid = auth.currentUser;

    await listRef.add({
      present: formValue,
      isTicked: false,
      uid,
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <MyList></MyList>
      <form onSubmit={addPresent} className={classes.root}>
        <TextField id="outlined-basic" label="Present" variant="outlined" autoComplete="off" onChange={(e) => setFormValue(e.target.value)} value={formValue} />
        <Button variant="contained" color="primary" disableElevation>Add Present</Button>
      </form>
    </div>
  );
};

export default List;