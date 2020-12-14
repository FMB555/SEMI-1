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
        height: 240,
    },
    item: {
        float: 'left'
    }
}));

export default function Animales() {
    const classes = useStyles();

    
    //CREAR UNA FUNCION QUE AGARRA UN ARRAY DE ANIMALES Y LO CONVIERTE A CADA UNO EN UN ITEM

    const animales = [/*
        {
            caravana: "ST 5016-8",
            categoria: "Novillo",
            nacimiento: "18/11/2019",
            ingreso: "01/02/2020",
            madre: false,
            genero: "Macho",
            peso: "120",
            fechaPeso: "18/11/2020"
        },
        {
            caravana: "ST 5017-8",
            categoria: "Novillo",
            nacimiento: "18/11/2019",
            ingreso: "1/02/2020",
            madre: false,
            genero: "Macho",
            peso: "150",
            fechaPeso: "18/11/2020"
        },
        {
            caravana: "ST 5018-8",
            categoria: "Ternero",
            nacimiento: "18/11/2019",
            ingreso: "01/02/2020",
            madre: false,
            genero: "Hembra",
            peso: "130",
            fechaPeso: "18/11/2020"
        },
        {
            caravana: "ST 5019-8",
            categoria: "Vaquillona",
            nacimiento: "14/09/2017",
            ingreso: "01/12/2017",
            madre: false,
            genero: "Hembra",
            peso: "270",
            fechaPeso: "18/11/2020"
        },
        {
            caravana: "ST 5020-8",
            categoria: "Toro",
            nacimiento: "15/07/2018",
            ingreso: "01/10/2018",
            madre: false,
            genero: "Macho",
            peso: "120",
            fechaPeso: "18/11/2020"
        },*/
        {
            caravana: "ST 5021-8",
            categoria: "Vaca",
            nacimiento: "18/11/2018",
            ingreso: "14/01/2019",
            madre: true,
            genero: "Hembra",
            peso: "230",
            fechaPeso: "15/11/2020"
        }
        
    ]

    const bodyAnimales = animales.map(vaca => (
        <ItemAnimal className={classes.item} vaca={vaca}/>
    ))


  return (
    <div className={classes.root}>
        <Grid container spacing={1}>

            {bodyAnimales}

        </Grid>

    </div>
  );
}
