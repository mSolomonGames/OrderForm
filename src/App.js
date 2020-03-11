import React from 'react';
import { makeStyles } from '@material-ui/core';
import { OrderForm, Header } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "20px 120px 20px 120px"
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <OrderForm />
    </div>
  );
}

export default App;
