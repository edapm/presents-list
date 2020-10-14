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

function MyList() {
  const classes = useStyles();
  const dummy = useRef();
  const presentsRef = firestore.collection('presents');
  const query = presentsRef.orderBy('createdAt').limit(25);

  const [presents] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendData = async (e) => {
    e.preventDefault();

    const uid = auth.currentUser;

    await presentsRef.add({
      text: formValue,
      uid,
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {presents && presents.map(item => <Item key={item.id} present={item.text} />)}

      <span ref={dummy}></span>

    </main>

      <form className={classes.root} autoComplete="off" onSubmit={sendData} >
        <TextField id="outlined-basic" label="Present" variant="outlined" autoComplete="off" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <Button variant="contained" color="primary" disableElevation>Add Present</Button>
      </form>
  </>)
}


function Item(props) {
  const { text, uid } = props.present;


  return (<>
    <div>
      <p>{text}</p>
    </div>
  </>)
}

export default MyList;