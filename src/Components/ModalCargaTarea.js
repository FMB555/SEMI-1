import React, { Component } from 'react'

import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button} from '@material-ui/core'

export default class ModalCargaTarea extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tarea: '',
            asignadoa: '',
            vencimiento: '',
            etiquetas: []
        }
        
        this.handleTarea = this.handleTarea.bind(this)
        this.handleResponsable = this.handleResponsable.bind(this)
    }

    handleTarea(e) {
        this.setState({
            tarea: e.target.value
        })
    }

    handleResponsable(e) {
        this.setState ({
            asignadoa: e.target.value 
        })
        console.log(e.target.value)
    }

    handleVencimiento(e) {
        this.setState ({
            vencimiento: e.target.value
        })
    }
    
    render() {
        return (
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <TextField id="outlined-basic" value={this.state.nombreCampo} label="Ingresar tarea" variant="outlined" fullWidth onChange={this.handleTarea} required/>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item xs={12} sm={4}>
                        <FormControl variant="outlined" fullWidth required>
                            <InputLabel id="asignarTarea">Encargado de la tarea</InputLabel>
                            <Select
                                labelId="asignarTarea"
                                value={this.state.asignadoa}
                                id="asignar Tarea"
                                onChange={this.handleResponsable}
                                >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={'Augusto'}>Augusto</MenuItem>
                                <MenuItem value={'Lucas'}>Lucas</MenuItem>
                                <MenuItem value={'Nico'}>Nico</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="vencimiento"
                            label="Vencimiento"
                            type="date"
                            defaultValue={Date.now()}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        
                    </Grid>
                </Grid>
                <Button color='primary'>Crear Tarea</Button>
            </form>
        )
    }
}
