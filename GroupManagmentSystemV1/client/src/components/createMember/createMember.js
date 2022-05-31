<<<<<<< HEAD
import React from 'react';
import { makeStyles } from '@mui/styles';  
import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
        },
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();
  return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
  );
}
=======
>>>>>>> parent of 4b01623 (Update v7)
