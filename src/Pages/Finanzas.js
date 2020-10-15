import React from 'react';

//Estilos de Material UI
import { makeStyles } from '@material-ui/core/styles';

//Elementos de Material UI
import { Box, Typography, Container } from '@material-ui/core';

//Iconos de Material UI
//import {  } from '@material-ui/icons';


//Nuestros componentes
import MiAppbar from '../Components/Appbar'

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

  return (
    <>
    <div className={classes.root}>
      <MiAppbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {/**/}



          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
    
    </>
  );
}