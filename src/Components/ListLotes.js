import React from 'react'

import { Grid, Divider, Button, TextField} from '@material-ui/core'

import { Delete } from '@material-ui/icons'

export default function ListLotes(props){

    const listado = props.lotes.map( lote => {
        return (
            <div key={lote}>
                <Divider />
                <br/>
                <Grid container spacing={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <TextField id="outlined-basic"  label="Ingrese el Nombre de su Lote" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField id="outlined-basic" label="Ingresar la Cantidad de Hectáreas del Lote" variant="outlined" type='number' fullWidth required/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <h3>Animales</h3>
                            <p>Cargue sus animales aquí</p>
                            <input type='file' required/>
                        </Grid>
                        <Grid item xs={5}>
                            <h3>Pasturas</h3>
                            <p>Cargue sus pasturas aquí</p>
                            <input type='file' required/>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={() => {props.deleteLote(lote)}}><Delete /></Button>
                        </Grid>
                    </Grid>
                </Grid>
                <br/>
            </div>
            )
    })

    return (
        <div>
            {listado}
        </div>
    )
}
