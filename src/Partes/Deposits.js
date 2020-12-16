import React from 'react';
//import Link from '@material-ui/core/Link';
import {Card, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/*
function preventDefault(event) {
  event.preventDefault();
}*/

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  card : {
    flexGrow: 1,
    minWidth: 100,
    maxWidth: 400,
    height: 200,
    width: '100%',
}
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>

      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <h1>Cantidad de cabezas</h1>
          <Typography component="p" variant="h4">
            6
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <h1>Peso Promedio</h1>
          <Typography component="p" variant="h4">
            213 KG
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <h1>Relacion Macho/Hembra</h1>
          <Typography component="p" variant="h4">
            2 Hembras / 4 Machos
          </Typography>
        </Card>
      </Grid>

    </Grid>
  );
}