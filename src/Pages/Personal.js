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
import MiAppbar from '../Components/Appbar'
import Empleados from '../Components/Empleados'
import Estadisticas from '../Components/EstadisticasPersonal'



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
          
          <Grid container>
            <Grid item xs={1}>
              <Link to='/lote'><Button size="small" color="secondary">Lotes</Button></Link>
            </Grid>
            <Grid item xs={10}>
              <h1>[Nombre Campo]</h1>
              <h2>[n] Hectáreas</h2>
            </Grid>
            <Grid item xs={1}>
              <Link to='/finanzas'><Button size="small" color="secondary">Finanzas</Button></Link>
            </Grid>
          </Grid>

          <Grid container spacing={3}>


            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <h3>Empleados</h3>
                <Empleados />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h3>Estadísticas de Tareas</h3>
                <Estadisticas />
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