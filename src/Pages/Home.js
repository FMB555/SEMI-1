import React from 'react';

//Estilos de Material UI
import { makeStyles } from '@material-ui/core/styles';

//Elementos de Material UI
import { Box, Typography, Container, Grid, Paper } from '@material-ui/core';

//Iconos de Material UI
//import {  } from '@material-ui/icons';


//Nuestros componentes
import MiAppbar from '../Components/Appbar'
import Calendario from '../Partes/Calendario'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <MiAppbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" spacing={3} className={classes.container}>
          {/*Cards con Distintos Campos*/}
          <Grid container spacing={3}>

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                  
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                      <h3>Calendario</h3>
                      <Calendario/>
                </Paper>
            </Grid>
          </Grid>

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
    
    </>
  );
}