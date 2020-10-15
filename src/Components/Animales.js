import React, {useState}from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Modal,
        Card, CardContent, CardActions, Typography,                                   //Cards
        Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Checkbox    //Tabla
    } from '@material-ui/core';

//Mis cosas
import vacaIco from './../Icons/vaca.svg'
//import chanchoIco from './../Icons/pig.svg'

//import vacasArray from './../Test/vacasArray.js'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '100%',
        minHeight: '100%',
        height: 240,
        border: '3px solid black'
    },
    modal: {
        position: 'absolute',
        width: '90%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    card : {
        flexGrow: 1,
        minWidth: 150,
        maxWidth: 275,
        width: '100%',
        height: 175,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    padre: {
        background: 'yellow'
    },
    hijo:{
        display: 'inline'
    }
}));

export default function Animales() {
    const classes = useStyles();

    const [modalVacuna, setModalVacuna] = useState(false)

    const abrirCerrarModalVacuna = () => {
        setModalVacuna(!modalVacuna)
    }

    const mostrarVacas = (
        <div className={classes.padre}>
            <div className={classes.hijo}>
                <Card className={classes.card}>
                    <CardContent>
                        <Button size="small" onClick={abrirCerrarModalVacuna}>
                            <img src={vacaIco} alt='Vaca' style={{width:64, height:64}}/>
                        </Button>
                        <Typography variant="h5" component="h2">
                            X-001
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            200 KG
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <br />
            <div className={classes.hijo}>
                <Card className={classes.card}>
                    <CardContent>
                        <Button size="small" onClick={abrirCerrarModalVacuna}>
                            <img src={vacaIco} alt='Vaca' style={{width:64, height:64}}/>
                        </Button>
                        <Typography variant="h5" component="h2">
                            X-002
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            170 KG
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={abrirCerrarModalVacuna}>Vacunas</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )

    const bodyVacuna = (
        <div className={classes.modal}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Vacuna</TableCell>
                            <TableCell>Dosis</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Aplicada</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>Antiparasitario</TableCell>
                            <TableCell>Primera</TableCell>
                            <TableCell>31/10/2020</TableCell>
                            <TableCell><Checkbox/></TableCell>
                        </TableRow>
                    </TableBody>

                    <TableBody>
                        <TableRow>
                            <TableCell>Antiparasitario</TableCell>
                            <TableCell>Segunda</TableCell>
                            <TableCell>27/11/2020</TableCell>
                            <TableCell><Checkbox/></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

  return (
    <div className={classes.root}>
        <Grid container spacing={1}>
            {mostrarVacas}
        </Grid>
        
        <Modal open={modalVacuna}
            onClose={abrirCerrarModalVacuna}>
            {bodyVacuna}
        </Modal>

    </div>
  );
}
