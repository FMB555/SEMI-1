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

    const animales = [
        {
            caravana: "ST 5016-8",
            categoria: "Novillo",
            nacimiento: "18/11/2019",
            ingreso: "01/02/2020",
            madre: false,
            genero: "Macho",
            peso: "182",
            fechaPeso: "18/11/2020",
            vacunas: [
                {
                    id: 0,
                    nombre: "Clostridial",
                    dosis: "Primera",
                    fecha: "18-02-2020",
                    aplicada: true
                },
                {
                    id: 1,
                    nombre: "Clostridial",
                    dosis: "Segunda",
                    fecha: "18-03-2020",
                    aplicada: true
                },
                {
                    id: 2,
                    nombre: "Clostridial",
                    dosis: "Tercera",
                    fecha: "18-04-2020",
                    aplicada: true
                },
            ]
        },
        {
            caravana: "ST 5017-8",
            categoria: "Novillo",
            nacimiento: "18/11/2019",
            ingreso: "1/02/2020",
            madre: false,
            genero: "Macho",
            peso: "178",
            fechaPeso: "18/11/2020",
            vacunas: [
                {
                    id: 0,
                    nombre: "Clostridial",
                    dosis: "Primera",
                    fecha: "18-02-2020",
                    aplicada: true
                },
                {
                    id: 1,
                    nombre: "Clostridial",
                    dosis: "Segunda",
                    fecha: "18-03-2020",
                    aplicada: true
                },
                {
                    id: 2,
                    nombre: "Clostridial",
                    dosis: "Tercera",
                    fecha: "18-04-2020",
                    aplicada: true
                },
            ]
        },
        {
            caravana: "ST 5018-8",
            categoria: "Ternero",
            nacimiento: "11/09/2020",
            ingreso: "11/09/2020",
            madre: false,
            genero: "Hembra",
            peso: "141",
            fechaPeso: "18/11/2020",
            vacunas: [
                {
                    id: 0,
                    nombre: "Clostridial",
                    dosis: "Primera",
                    fecha: "11-12-2020",
                    aplicada: true
                },
                {
                    id: 1,
                    nombre: "Brucelosis",
                    dosis: "Única",
                    fecha: "05-01-2021",
                    aplicada: false

                },
                {
                    id: 2,
                    nombre: "Clostridial",
                    dosis: "Segunda",
                    fecha: "11-01-2021",
                    aplicada: false
                },
                {
                    id: 3,
                    nombre: "Clostridial",
                    dosis: "Tercera",
                    fecha: "11-02-2021",
                    aplicada: false
                }
                
            ]
        },
        {
            caravana: "ST 5019-8",
            categoria: "Vaquillona",
            nacimiento: "14/09/2017",
            ingreso: "01/12/2017",
            madre: true,
            genero: "Hembra",
            peso: "263",
            fechaPeso: "18/11/2020",
            vacunas: [
                {
                    id: 0,
                    nombre: "Clostridial",
                    dosis: "Primera",
                    fecha: "14-12-2017",
                    aplicada: true
                },
                {
                    id: 1,
                    nombre: "Brucelosis",
                    dosis: "Única",
                    fecha: "08-01-2018",
                    aplicada: true

                },
                {
                    id: 2,
                    nombre: "Clostridial",
                    dosis: "Segunda",
                    fecha: "14-01-2018",
                    aplicada: true
                },
                {
                    id: 3,
                    nombre: "Clostridial",
                    dosis: "Tercera",
                    fecha: "14-02-2018",
                    aplicada: true
                },
                {
                    id: 4,
                    nombre: "Carbunclo",
                    dosis: "Única",
                    fecha: "26-06-2020",
                    aplicada: true
                }
                
            ]
        },
        {
            caravana: "ST 5020-8",
            categoria: "Toro",
            nacimiento: "15/07/2018",
            ingreso: "01/10/2018",
            madre: false,
            genero: "Macho",
            peso: "290",
            fechaPeso: "18/11/2020",
            vacunas: [
                {
                    id: 0,
                    nombre: "Clostridial",
                    dosis: "Primera",
                    fecha: "15-10-2018",
                    aplicada: true
                },
                {
                    id: 1,
                    nombre: "Clostridial",
                    dosis: "Segunda",
                    fecha: "15-11-2018",
                    aplicada: true
                },
                {
                    id: 3,
                    nombre: "Clostridial",
                    dosis: "Tercera",
                    fecha: "15-12-2018",
                    aplicada: true
                },
                {
                    id: 4,
                    nombre: "Carbunclo",
                    dosis: "Única",
                    fecha: "26-06-2020",
                    aplicada: true
                }
                
            ]
        },
        {
            caravana: "ST 5021-8",
            categoria: "Vaca",
            nacimiento: "18/11/2018",
            ingreso: "14/01/2019",
            madre: true,
            genero: "Hembra",
            peso: "230",
            fechaPeso: "15/11/2020",
            vacunas: [
                {
                    id: 0,
                    nombre: "Clostridial",
                    dosis: "Primera",
                    fecha: "14-12-2017",
                    aplicada: true
                },
                {
                    id: 1,
                    nombre: "Brucelosis",
                    dosis: "Única",
                    fecha: "08-01-2018",
                    aplicada: true

                },
                {
                    id: 2,
                    nombre: "Clostridial",
                    dosis: "Segunda",
                    fecha: "14-01-2018",
                    aplicada: true
                },
                {
                    id: 3,
                    nombre: "Clostridial",
                    dosis: "Tercera",
                    fecha: "14-02-2018",
                    aplicada: true
                },
                {
                    id: 4,
                    nombre: "Carbunclo",
                    dosis: "Única",
                    fecha: "26-06-2020",
                    aplicada: true
                }
                
            ]
        }
        
    ]

    const bodyAnimales = animales.map(vaca => (
        <ItemAnimal className={classes.item} vaca={vaca} key={vaca.caravana}/>
    ))


  return (
    <div className={classes.root}>
        <Grid container spacing={1}>

            {bodyAnimales}

        </Grid>

    </div>
  );
}
