import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firebase } from "./Firebase";

const firestore = firebase.firestore();

const ref = firestore.collection("presents");

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const MyList = () => {
  const [presents, setPresents] = useState([]);
  ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPresents(items);
    });

  var html = presents.map ( present => 
        <div key={present.id}>
        <h1>{present.name}</h1>
        <h3>{present.info}</h3>
      </div>);

  return html;
};

export default MyList;