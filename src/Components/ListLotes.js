import React from 'react'

import { Grid, Divider, Button} from '@material-ui/core'

import { Delete } from '@material-ui/icons'

export default function ListLotes(props){

    const listado = props.lotes.map( lote => {
        return (
            <div key={lote}>
                <Divider />
                {lote}
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
