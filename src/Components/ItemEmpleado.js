import React, { useState } from 'react'

import { Grid, Card, CardContent, Button, Typography, Table, TableContainer, TableHead, TableCell, TableBody, Modal, TextField, TableRow} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import farmerIco from './../Icons/farmer.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '100%',
        minHeight: '100%',
        height: 240,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    paperModal: {
        position: 'absolute',
        width: "75%",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    card : {
        flexGrow: 1,
        minWidth: 150,
        maxWidth: 275,
        width: '100%',
        height: 175,
    },
}));

export default function ItemEmpleado() {
    const classes = useStyles();

    const [modal, setModal] = useState(false)
    const abrirCerrarModal= () => {
        setModal(!modal)
    }

    const [venciento, setVenciento] = useState("")
    const handleVencimiento = (e) => {
        setVenciento(e.target.value)
    }

    const [tarea, setTarea] = useState("")
    const handleTarea = (e) => {
        setTarea(e.target.value)
    }

    //Funcion que trae las tareas asignadas al empleado

    const modalEmpleado = (
        <div className={classes.paperModal}>
                <h2 align="center">Nombre</h2>
                <h3>Sueldo: </h3>
                <h3>Contacto: </h3>
                <h3>DNI: </h3>
                <br/>
                <br/>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Vencimiento</TableCell>
                                <TableCell>Tarea</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell>18/11/2020</TableCell>
                                <TableCell>Terminar el sprint 4</TableCell>
                            </TableRow>
                            
                        </TableBody>
                    </Table>
                </TableContainer>
                <br/><br/><br/>
                <form>
                    <h3 align="center">Asignar tarea</h3>
                    <Grid container>
                        <Grid item xs={12} sm={5}>
                            <TextField id="fecha" label="Fecha" variant="outlined" type="date" onChange={handleVencimiento} InputLabelProps={{shrink: true}} fullWidth={true}/> 
                        </Grid>

                        <Grid item xs={12} sm={7}>
                            <TextField id="tarea" label="Tarea" variant="outlined" onChange={handleTarea} type="text" required fullWidth={true}/>
                        </Grid>
                    </Grid>
                    <br/>

                    <Button align="center" variant="contained" color="primary">CREAR TAREA</Button>
                </form>
            </div>
    )

    const cardEmpleado = (
        <Grid item xs={12} sm={4} md={3}>
                <Card className={classes.card}>
                    <CardContent>
                        <Button size="small" onClick={abrirCerrarModal}>
                            <img src={farmerIco} alt='empleado' style={{width:64, height:64}}/>
                        </Button>
                        <Typography variant="h5" component="h2">
                            Nombre Empleado
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Tareas por hacer: X
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    )

    return (
        <>
            {cardEmpleado}

            <Modal open={modal}
                className={classes.modal}
                onClose={abrirCerrarModal}>
                {modalEmpleado}
            </Modal>
        </>
    )
}
