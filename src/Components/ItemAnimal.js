import React, {useState}from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Modal,
        Card, CardContent, CardActions, CardActionArea, Typography,                                   //Cards
        Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Checkbox,                   //Tabla
        TextField } from '@material-ui/core';


//Mis cosas
import vacaIco from './../Icons/vaca.svg'
import ItemVacuna from './ItemVacuna'

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: '50%',
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
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cargaVacuna: {
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 12
    },
    medio: {
        alignItems: 'center'
    }
}));

export default function Animales(props) {
    const classes = useStyles();

    const vaca = props.vaca

    //Handle modales
    
    const [modalInfo, setModalInfo] = useState(false)
    const abrirCerrarModalInfo = () => {
        setModalInfo(!modalInfo)
    }

    
    const [modalVacuna, setModalVacuna] = useState(false)
    const abrirCerrarModalVacuna = () => {
        setModalVacuna(!modalVacuna)
    }

    
    //Carga de nuevo peso
    const [nuevoPeso, setPeso] = useState("")
    const cambiarPeso =(e) => {
        setPeso(e.target.value)
    }

    const cargarPeso = (e) => {
        e.preventDefault()

        let hoy = new Date()

        vaca.fechaPeso = (hoy.getDate() + "/" + (hoy.getMonth() +1) + "/" + hoy.getFullYear())
        vaca.peso = nuevoPeso

        setPeso("")

    }
    
    const [mostrar, setMostrar] = useState('block')
    
    const deshabilitarVaca = () => {
        setModalInfo(false)
        setMostrar('none')
    }
    
    
        const bodyInfo = (
            <div className={classes.modal}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4}>
                        <img src={vacaIco} alt='Vaca' style={{width:128, height:128}}/>
                        <h2>Peso: {vaca.peso} KG</h2>
                        <h2>Fecha pesado: {vaca.fechaPeso}</h2>
                        <form>
                            <TextField id="cargaPeso" value={nuevoPeso} label="Nuevo Peso" variant="outlined" onChange={cambiarPeso} type="number" required/><br/><br/>
                            <Button color="primary" size="medium" variant="contained" type="submit" onClick={cargarPeso}>Cargar peso</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <h2>Caravana: {vaca.caravana}</h2>
                        <h2>Categoría: {vaca.categoria}</h2>
                        <h2>Nacimiento: {vaca.nacimiento}</h2>
                        <h2>Ingreso: {vaca.ingreso}</h2>
                        <h2>Género: {vaca.genero}</h2>
                        <h2>Madre: {(vaca.genero === "Macho") ? "No aplica": (vaca.madre)? "Sí": "No"}</h2>
                        <Button color="secondary" variant="contained" onClick={deshabilitarVaca}>Eliminar</Button>
                    </Grid>
                </Grid>
            </div>
        )

    const cardVacas = (
            <Grid item xs={12} sm={4} style={{display: mostrar}}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardContent>
                            <img src={vacaIco} alt='Vaca' style={{width:64, height:64}}/>
                            <Typography variant="h5" component="h2">
                                {vaca.caravana}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {vaca.peso} KG
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" onClick={abrirCerrarModalInfo} color="primary">Info</Button>
                        <Button size="small" onClick={abrirCerrarModalVacuna} color="primary">Vacunas</Button>
                    </CardActions>
                </Card>
            </Grid>
    )
    
       
    //Modal Vacuna
    const [vacunaInput, setVacuna] = useState("")
    const handleVacuna = (e) => {
        setVacuna(e.target.value)
    }

    const [dosisInput, setDosis] = useState("")
    const handleDosis = (e) => {
        setDosis(e.target.value)
    }

    const [fechaInput, setFecha] = useState("")
    const handleFecha = (e) => {
        setFecha(e.target.value)
    }

        
    const [vacunas, setVacunas] = useState(vaca.vacunas)

    const addVacuna = (e) => {
        e.preventDefault()
        
        let nuevaVacuna = {
            id: vacunas.length,
            nombre: vacunaInput,
            dosis: dosisInput,
            fecha: fechaInput,
            aplicada: false
        }

        setVacuna("")
        setDosis("")
        setFecha("")

        let arrayVacuna = [...vacunas, nuevaVacuna]

        setVacunas(arrayVacuna)
    }

    const itemsVacunas = vacunas.map( vac => (
        <ItemVacuna vacuna={vac} key={vac.id}/>
    ))
    
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

                        {itemsVacunas}

                    </TableBody>
                </Table>
            </TableContainer>
            <div className={classes.cargaVacuna}>
                <h1>Asignar Vacuna</h1>
                <form>

                    <TextField id="vacuna" value={vacunaInput} label="Vacuna" variant="outlined" onChange={handleVacuna} type="text" required/>
                    <TextField id="dosis" value={dosisInput} label="Dosis" variant="outlined" onChange={handleDosis} type="text" required/>
                    <TextField id="fecha" value={fechaInput} label="Fecha" variant="outlined" type="date" onChange={handleFecha} InputLabelProps={{shrink: true}}/>

                    <br/><br/>

                    <Button color="primary" variant="contained" type="submit" onClick={addVacuna}>Crear Vacuna</Button>
                </form>
            </div>
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
