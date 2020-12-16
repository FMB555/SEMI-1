import React from 'react'
import { Link } from 'react-router-dom'

//Estilos de Material UI
import { makeStyles } from '@material-ui/core/styles';


//Elementos de Material UI
import {CssBaseline, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

//Iconos de Material UI
import { Home, DirectionsWalk as Logout } from '@material-ui/icons';

//Mis cosas

import VacaStats from '../Icons/vacastats.png'


const useStyles = makeStyles((theme) => ({
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
      },
}));

export default function Appbar() {

    const classes = useStyles();  

    return (
        <>
        <CssBaseline />
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Link to='/'><Button><Home/></Button></Link>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    <img src={VacaStats} alt="" style={{width:32, height:32}}/> VacaStats
                </Typography>
            </Toolbar>
        </AppBar>
        </>
    
    )
}
