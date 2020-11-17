import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

//Mis cosas
import ItemAnimal  from './ItemAnimal'
//import vacasArray from './../Test/vacasArray.js'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '100%',
        minHeight: '100%',
        height: 240,
    },
    item: {
        float: 'left'
    }
}));

export default function Animales() {
    const classes = useStyles();

    
    //CREAR UNA FUNCION QUE AGARRA UN ARRAY DE ANIMALES Y LO CONVIERTE A CADA UNO EN UN ITEM


  return (
    <div className={classes.root}>
        <Grid container spacing={1}>
            <ItemAnimal className={classes.item}/>
            <ItemAnimal className={classes.item}/>
        </Grid>

    </div>
  );
}
