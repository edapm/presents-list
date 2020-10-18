import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { firebase } from "./Firebase";


const firestore = firebase.firestore();
const auth = firebase.auth();

const ref = firestore.collection("presents");

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    paper: {
        textAlign: 'center',
        position: "absolute",
        bottom: 0,
    }
  },
}));

const Form = () => {
  const classes = useStyles();
  const [nameValue, setNameValue] = useState('');

  const addPresent = async (e) => {
    e.preventDefault();

    const uid = auth.currentUser;
    const tickuid = null;

    await ref.add({uid: "{uid}", name: nameValue, tickuid});

    setNameValue('');
}
return (
<Paper className={classes.paper}>
  <form className={classes.root} autoComplete="off" onSubmit={addPresent}>
        <TextField id="outlined-basic" label="Present" variant="outlined" autoComplete="off" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
        <Button type="submit" variant="contained" color="primary" disableElevation>Add Present</Button>
  </form>
</Paper>
)
}

export default Form;