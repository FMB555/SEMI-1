import React from 'react';
import clsx from 'clsx';

//Estilos de Material UI
import { makeStyles } from '@material-ui/core/styles';

//Elementos de Material UI
import { Box, Typography, Container, Grid, Paper } from '@material-ui/core';

//Iconos de Material UI
import {  } from '@material-ui/icons';

//Nuestras partes
import Animales from '../Components/Animales'
import MiAppbar from './../Components/Appbar'



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

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <>
    <div className={classes.root}>
      <MiAppbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <h1>Campo X - Lote N</h1>
          <Grid container spacing={3}>


            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <h3>Animales</h3>
                <Animales />
              </Paper>
            </Grid>


            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <h3>Pasturas</h3>
              </Paper>
            </Grid>


            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h3>Estadísticas Animales</h3>
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