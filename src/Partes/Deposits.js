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
    maxWidth: 275,
    width: '100%',
    height: '100%',
}
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4} md={3}>
          <Card className={classes.card}>
            <h1>Cantidad de cabezas</h1>
            <Typography component="p" variant="h4">
              5
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Card className={classes.card}>
            <h1>Peso Promedio de Vacas</h1>
            <Typography component="p" variant="h4">
              194 KG
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Card className={classes.card}>
            <h1>Relacion Macho/Hembra</h1>
            <Typography component="p" variant="h4">
              3 Hembras / 2 Machos
            </Typography>
          </Card>
        </Grid>

      </Grid>
      
      
      
    </React.Fragment>
  );
}