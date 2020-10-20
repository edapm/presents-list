import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { firebase } from "./Firebase";


const firestore = firebase.firestore();
const auth = firebase.auth();

const ref = firestore.collection("presents");

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
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
  const [priceValue, setPriceValue] = useState('');

  const addPresent = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser; 
    const tickuid = null;
    const keyid = Date.now().toString();

    await ref.add({keyid, uid, name: nameValue, price: priceValue, tickuid});

    setNameValue('');
    setPriceValue('');
}
return(
<Paper className={classes.paper}>
  <form className={classes.root} autoComplete="off" onSubmit={addPresent}>
        <TextField id="outlined-basic" label="Present" variant="outlined" autoComplete="off" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
        <TextField id="outlined-basic" label="Price" variant="outlined" autoComplete="off" value={priceValue} onChange={(e) => setPriceValue(e.target.value)} />
        <IconButton type="submit" variant="outlined" fontSize="large" color="primary"><CheckCircleIcon></CheckCircleIcon></IconButton>
  </form>
</Paper>
)
}

export default Form;