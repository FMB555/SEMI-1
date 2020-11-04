import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1>Peso Promedio</h1>
      <Typography component="p" variant="h4">
        194 KG
      </Typography>
      <h1>Relacion Macho/Hembra</h1>
      <Typography component="p" variant="h4">
        3 Hembras / 2 Machos
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        04/11/2020
      </Typography>
    </React.Fragment>
  );
}