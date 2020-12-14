import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import {Card, CardContent, CardActions, Button} from '@material-ui/core'
import granjaIco from './../Icons/granja.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 200,
        minHeight: 250
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      }
}))

export default function CardCampo() {

    const classes = useStyles();

    /*
    TRAER EL CAMPO
    */

    return (
        <Card className={classes.root}>
            <CardContent>
                <h1>Mi campito con vacas</h1>
                <br/>
                <img src={granjaIco} alt='empleado' style={{width:64, height:64}}/>
            </CardContent>
            <CardActions>
                <Button size="small" href='/personal'>Personal</Button>
                <Button size="small" href='/finanzas'>Finanzas</Button>
                <Button size="small" href='/lote'>Lotes</Button>
            </CardActions>
        </Card>
    )
}
