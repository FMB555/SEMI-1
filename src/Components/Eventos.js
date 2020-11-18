import React from 'react'

import { Card, CardActionArea, Typography, Grid, CardContent } from '@material-ui/core'


export default function Eventos() {
        
    //FUNCION PARA TRAER LOS EVENTOS

    const ejemplo =(
        <Grid item xs={3}>
                <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5" component="h2">17/11/2020</Typography>
                        <Typography variant="subtitle1" component="h2">Descricpción de la tarea</Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
    )


    return (
        <div>
        <Grid container spacing={3}>
            {ejemplo}
            {ejemplo}
            {ejemplo}
            {ejemplo}
            {ejemplo}
            {ejemplo}
            {ejemplo}
        </Grid>
        </div>
    )
}
