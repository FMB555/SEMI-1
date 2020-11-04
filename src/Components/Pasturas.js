import React from 'react'

//Estilos de Material UI
import { makeStyles } from '@material-ui/core/styles';

//Componentes
import {Grid} from '@material-ui/core'

//Iconos

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center'
    },
    worker: {
        backgroundColor: theme.palette.background.paper,
        border: '2px flex #999',
        width: '100%',
        borderRadius: 5,
        alignSelf: 'center',
        margin: 5,
        textAlign: 'left'
    },
}))

export default function Pasturas(props) {
    const classes = useStyles();

    /* 
        Función que lee de props las pasturas y las muestra por pantalla
    */

    const ejemplo = (
        <div className={classes.worker}>
            <hr/>
            <Grid container>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <p>Tipo de pastura: Avena</p> 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <p>Cantidad de Hectáreas: 20</p> 
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <p>Sembrado el: 4/11/2020</p> 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <p>Renovar el: 4/5/2021</p> 
                </Grid>
            </Grid>
        </Grid>
        </div>
    )

    return (
        <div className={classes.root}>
            {ejemplo}
            {ejemplo}
            {ejemplo}
        </div>
    )
}
