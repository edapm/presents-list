import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

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


const MyList = () => {
  const classes = useStyles();
  const presentsRef = firestore.collection('presents');
  const query = presentsRef.get()
  const [presents] = useCollectionData(query);

  return (
    <div>
      {presents.map((presents) => {
        return (
          <h1 key="presents.name">{presents.name}</h1>
        )
      })}
      <form className={classes.root} autoComplete="off">
        <TextField id="outlined-basic" label="Present" variant="outlined" autoComplete="off" />
        <Button variant="contained" color="primary" disableElevation>Add Present</Button>
      </form>
    </div>
  );
};

export default MyList;