import React, {useState}from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Modal,
        Card, CardContent, CardActions, CardActionArea, Typography,                                   //Cards
        Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Checkbox,                   //Tabla
        TextField
    } from '@material-ui/core';
import { InfoOutlined, FavoriteBorder } from '@material-ui/icons';


//Mis cosas
import vacaIco from './../Icons/vaca.svg'
//import chanchoIco from './../Icons/pig.svg'

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
        transform: 'translate(-50%, -50%)',
    },
    card : {
        flexGrow: 1,
        width: '100%',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
}));

export default function Animales() {
    const classes = useStyles();

    //Modal Vacuna
    const [modalVacuna, setModalVacuna] = useState(false)
    const abrirCerrarModalVacuna = () => {
        setModalVacuna(!modalVacuna)
    }
    
    //Modal Info del bicho
    const [modalInfo, setModalInfo] = useState(false)
    const abrirCerrarModalInfo = () => {
        setModalInfo(!modalInfo)
    }
    
    //Carga de nuevo peso
    const [nuevoPeso, setPeso] = useState(0)
    const cambiarPeso =(e) => {
        setPeso(e.target.value)
        console.log(nuevoPeso)
    }

    const cardVacas = (
            <Grid item xs={12} sm={4} md={3}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardContent>
                            <img src={vacaIco} alt='Vaca' style={{width:64, height:64}}/>
                            <Typography variant="h5" component="h2">
                                Caravana
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Peso
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" onClick={abrirCerrarModalInfo} color="primary"><InfoOutlined/></Button>
                        <Button size="small" onClick={abrirCerrarModalVacuna} color="primary"><FavoriteBorder/></Button>
                    </CardActions>
                </Card>
            </Grid>
    )

    //Método para buscar vacunas del animal

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

    const bodyInfo = (
        <div className={classes.modal}>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={vacaIco} alt='Vaca' style={{width:128, height:128}}/>
                    <h2>Peso (en Kg): </h2>
                    <h2>Fecha pesado: </h2>
                    <form>
                        <TextField id="cargaPeso" label="Nuevo Peso" variant="outlined" onChange={cambiarPeso} type="number" required/><br/>
                        <Button color="primary" size="medium" variant="contained" type="submit">Cargar peso</Button>
                    </form>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <h2>Caravana: </h2>
                    <h2>Categoría: </h2>
                    <h2>Nacimiento: </h2>
                    <h2>Ingreso: </h2>
                    <h2>Género: </h2>
                    <h2>Madre: </h2>
                </Grid>
                
            </Grid>
        </div>
    )

  return (
    <>
        {cardVacas}
        
        <Modal open={modalVacuna}
            onClose={abrirCerrarModalVacuna}>
            {bodyVacuna}
        </Modal>

        <Modal open={modalInfo}
            onClose={abrirCerrarModalInfo}>
            {bodyInfo}
        </Modal>
    </>
  );
}
