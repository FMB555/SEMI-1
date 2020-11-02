import React, { Component } from 'react'

import ListLotes from './ListLotes'

import { Grid, TextField, Button, Divider } from '@material-ui/core'

export default class ModalCargaCampo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombreCampo: '',
            cantHectareas: '', 
            lotes: [],
        }
        
        this.addLote = this.addLote.bind(this)
        this.handleNombre = this.handleNombre.bind(this)
        this.handleHectareas = this.handleHectareas.bind(this)
        this.deleteLote = this.deleteLote.bind(this)
    }

    handleNombre(e) {
        this.setState ({
            nombreCampo: e.target.value
        })
    }

    handleHectareas(e){
        this.setState ({
            cantHectareas: e.target.value
        })
        console.log(e.target.value)
    }

    addLote(e) {
        e.preventDefault()
        const lote = Date.now()
        this.setState({
            lotes: [...this.state.lotes, lote]
        })
    }

    deleteLote(key) {
        console.log(key);
        console.log(this.state.lotes)
        const lotesFilt = this.state.lotes.filter( lote => lote.key !== key)
        console.log(lotesFilt)
        this.setState({
            lotes: lotesFilt
        })
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Cargá tu campo</h1>

                    {/*Cargar datos generales del campo*/}
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <TextField id="outlined-basic" value={this.state.nombreCampo} label="Ingrese el Nombre de su Campo" variant="outlined" fullWidth onChange={this.handleNombre} required/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField id="outlined-basic" label="Ingresar la Cantidad de Hectáreas" variant="outlined" type='number' fullWidth onChange={this.handleHectareas} required/>
                        </Grid>
                    </Grid>

                    <Button onClick={this.addLote}>Crear Lote</Button>

                    <ListLotes lotes={this.state.lotes} deleteLote={this.deleteLote}/>

                    <Divider />

                    <h3>Empleados</h3>
                    <p>Cargue sus empleados aquí</p>
                    <input type='file' required/>
                    <Divider />

                    <Button type='submit'> Finalizar </Button>

                </form>

            </div>
        )

    }
}
