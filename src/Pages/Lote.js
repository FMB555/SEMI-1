import React from 'react';
import { Link } from 'react-router-dom'

import clsx from 'clsx';

//Estilos de Material UI
import { makeStyles } from '@material-ui/core/styles';

//Elementos de Material UI
import { Box, Typography, Container, Grid, Paper, Button } from '@material-ui/core';

//Iconos de Material UI
import {  } from '@material-ui/icons';

//Nuestras partes
import Animales from '../Components/Animales'
import Pasturas from '../Components/Pasturas'
import MiAppbar from './../Components/Appbar'
import Deposits from '../Partes/Deposits'
//import Graph from '../Icons/file.png'

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
    height: 300,
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

          
          <Grid container>
            <Grid item xs={1}>
              <Link to='/finanzas'><Button size="small" color="secondary">Finanzas</Button></Link>
            </Grid>
            <Grid item xs={10}>
              <h1>Mi campo</h1>
            </Grid>
            <Grid item xs={1}>
              <Link to='/personal'><Button size="small" color="secondary">Personal</Button></Link>
            </Grid>
          </Grid>


          <Grid container spacing={3}>


            <Grid item xs={12} md={6}>
              <Paper className={fixedHeightPaper}>
                <h3>Animales</h3>
                <Animales />
              </Paper>
            </Grid>


            <Grid item xs={12} md={6}>
              <Paper className={fixedHeightPaper}>
                <h3>Pasturas</h3>
                <Pasturas />
              </Paper>
            </Grid>


            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h3>Estadísticas Animales</h3>
                <Deposits />
                
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
    
    </>
  );
}