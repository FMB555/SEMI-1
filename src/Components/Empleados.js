import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Modal,
        Card, CardContent, Typography, //CardActions,                                 //Cards
        Collapse, List, ListItem, ListItemText } from '@material-ui/core'

//Iconos de Material UI
import { ExpandLess, ExpandMore } from '@material-ui/icons';
//Mis cosas
import farmerIco from './../Icons/farmer.svg'
import ItemEmpleado from './ItemEmpleado'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '100%',
        minHeight: '100%',
        height: 240,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paperModal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    card : {
        flexGrow: 1,
        minWidth: 150,
        maxWidth: 275,
        width: '100%',
        height: 175,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        fontSize: 10

    }
}));

export default function Animales() {
    const classes = useStyles();

    //ARRAY DE EMPLEADOS PARA HACER CADA ITEM

    const empleados = [{
        dni: '1103622',
        nombre: 'Jota',
        sueldo: '50000',
        mail: 'jota@test.com'
    }]

    const itemsEmpleados = empleados.map( item => (
        <ItemEmpleado empleado={item}/>
    ))

  return (
    <div className={classes.root}>
        <Grid container spacing={1}>
            {itemsEmpleados}
        </Grid>
        

    </div>
  );
}
