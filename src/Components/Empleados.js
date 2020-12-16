import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

import ItemEmpleado from './ItemEmpleado'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '100%',
        minHeight: '100%',
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
        width: '100%'
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

    const empleados = [
        {
            dni: '42069678',
            nombre: 'Juan Pablo',
            sueldo: '$ 10.000',
            mail: 'jota@mail.com',
            tareas: [
                {
                    vencimiento: "16-12-2020",
                    tarea: "Presentar demo",
                },
                {
                    vencimiento: "18-12-2020",
                    tarea: "Arreglar tranquera",
                }                
            ]
        },
        {
            dni: '39721302',
            nombre: 'Nico',
            sueldo: '$ 15.000',
            mail: 'nico@mail.com',
            tareas: [
                {
                    vencimiento: "16-12-2020",
                    tarea: "Presentar demo",
                },
                {
                    vencimiento: "17-12-2020",
                    tarea: "Vacunar animales",
                }                
            ]
        },
        {
            dni: '41992153',
            nombre: 'Fran',
            sueldo: '$ 25.000',
            mail: 'fran@mail.com',
            tareas: [
                {
                    vencimiento: "16-12-2020",
                    tarea: "Presentar demo",
                },
                {
                    vencimiento: "16-12-2020",
                    tarea: "Comprar vacunas",
                }                
            ]
        },
        {
            dni: '40157321',
            nombre: 'Augusto',
            sueldo: '$ 17.000',
            mail: 'august@mail.com',
            tareas: [
                {
                    vencimiento: "16-12-2020",
                    tarea: "Presentar demo",
                }               
            ]
        },
        {
            dni: '40592317',
            nombre: 'Jime',
            sueldo: '$ 9.000',
            mail: 'jime@mail.com',
            tareas: [
                {
                    vencimiento: "16-12-2020",
                    tarea: "Presentar demo",
                },
                {
                    vencimiento: "29-12-2020",
                    tarea: "Calcular sueldos"
                }            
            ]
        },
    ]

    const itemsEmpleados = empleados.map( item => (
        <ItemEmpleado empleado={item} key={item.dni}/>
    ))

  return (
    <div className={classes.root}>
        <Grid container spacing={1}>
            {itemsEmpleados}
        </Grid>
        

    </div>
  );
}
