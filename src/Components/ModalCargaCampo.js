import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import { Grid, TextField, Button, Divider } from '@material-ui/core'

export default function ModalCargaCampo() {

    const [nombre, setNombre] = useState("")
    const handleNombre = (e) => {
        setNombre(e.target.value)
    }

    const [hectareas, setHectareas] = useState("")
    const handleHectareas = (e) => {
        setHectareas(e.target.value)
    }
    
    const [file, setFile] = useState(null)
    const handleFile = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <form>
                <h1>Cargá tu campo</h1>
                {/*Cargar datos generales del campo*/}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <TextField id="outlined-basic" label="Ingrese el Nombre de su Campo" variant="outlined" fullWidth={true} onChange={handleNombre} required/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField id="outlined-basic" label="Ingresar la Cantidad de Hectáreas" variant="outlined" type='number' fullWidth={true} onChange={handleHectareas} required/>
                    </Grid>
                </Grid>
                <br/>

                <Divider />
                <h3>Archivo</h3>
                <p>Deje su arhivo aquí, por favor ingrese únicamente la plantilla provista por nosotros y recuerde completar las hojas con los datos que correspondan.</p>
                <input type='file' onChange={handleFile} required/>
                <br/>
                <br/>
                <br/>

                <Button type='submit' variant="contained" color="primary"> Finalizar </Button>
                <br/><br/>
                <p>¿No tiene nuestra plantilla? Puede descargarla haciendo click <Link to='/'>acá</Link>.</p>

            </form>

        </div>
    )
}
