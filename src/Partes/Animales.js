import React, {useState}from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Modal,
        Card, CardContent, CardActions, Typography,         //Cards
        Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Checkbox    //Tabla
    } from '@material-ui/core';

//Mis cosas
import vacaIco from './../Icons/vaca.svg'
//import vacasArray from './../Test/vacasArray.js'

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: '90%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    root: {
        flexGrow: 1,
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function Animales() {
    const classes = useStyles();

    const [modalVacuna, setModalVacuna] = useState(false)

    const abrirCerrarModalVacuna = () => {
        setModalVacuna(!modalVacuna)
    }

    const mostrarVacas = (
        <Grid container item xs={12} spacing={3}>
                <Grid item xs={4} >
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                <img src={vacaIco} alt='Vaca' style={{width:64, height:64}}/>
                            </Typography>
                            <Typography variant="h5" component="h2">
                                ID
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                PESO
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={abrirCerrarModalVacuna}>Vacunas</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
    )

    const bodyVacuna = (
        <div className={classes.modal}>
            <TableContainer>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Vacuna</TableCell>
                        <TableCell>Dosis (en mg)</TableCell>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Aplicada</TableCell>
                    </TableRow>
                    </TableHead>

                    <TableBody>
                    <TableRow>
                        <TableCell>Nombre de Vacuna</TableCell>
                        <TableCell>X</TableCell>
                        <TableCell>Hoy jsjs</TableCell>
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
