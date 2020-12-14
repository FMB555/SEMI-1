import React, {useState} from 'react'

import { Card, CardActionArea, Typography, Grid, CardContent, Button, Modal, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


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
        margin: 'auto'
    },
  }));

export default function Eventos() {
  const classes = useStyles();

    //Modal
    const [modalEvento, setModal] = useState(false)
    const abrirCerrarCarga = () => {
      setModal(!modalEvento)
    }

    const [fechaDesde, setDesde] = useState(null)
    const handleDesde = (e) => {
      setDesde(e.target.value)
    }
    const [fechaHasta, setHasta] = useState(null)
    const handleHasta = (e) => {
     setHasta(e.target.value)
    }
    const [detalle, setDetalle] = useState("")
    const handleDetalle = (e) => {
     setDetalle(e.target.value)
    }
    
    const [eventos, setEventos] = useState([])
    const addEvento = (e) => {
        e.preventDefault()

        let nuevoEvento = {
            desde: fechaDesde,
            hasta: fechaHasta,
            detalle: detalle
        }

        setDesde("")
        setHasta("")
        setDetalle("")

        let arrayEventos = [...eventos, nuevoEvento]

        console.log(arrayEventos)
        setEventos(arrayEventos)
        setModal(false)
    }

    const itemsEventos = eventos.map( evento => (
        <Grid item xs={3}>
            <Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="h2">{evento.desde} / {evento.hasta}</Typography>
                    <Typography variant="subtitle1" component="h2">{evento.detalle}</Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
    ))

  const bodyModal = (
    <div className={classes.modal}>
      <h1>Crear Evento</h1>
      <form>
        <Grid container>
        < Grid item xs={12} sm={6}>
          <TextField id="fechaDesde" label="Fecha Inicio" variant="outlined" type="date" onChange={handleDesde} InputLabelProps={{shrink: true}} required/>
          <br/><br/>
          <TextField id="fechaHasta" label="Fecha Fin" variant="outlined" type="date" onChange={handleHasta} InputLabelProps={{shrink: true}}/><br/><br/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="Detalle" label="Detalle" variant="outlined" type="text" onChange={handleDetalle} multiline={true} required fullwidth rows={5}/>
          </Grid>
        </Grid>
        <br/>
        <Button type="submit" variant="contained" color="primary" onClick={addEvento}>Crear</Button>
      </form>
    </div>
  )



    const ejemplo =(
        <Grid item xs={3}>
            <Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5" component="h2">2020-11-18 - 2020-11-18</Typography>
                    <Typography variant="subtitle1" component="h2">Preparar el sprint 4</Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Grid>
    )
    


    return (
        <div>
        <Button color="primary" variant="contained" onClick={abrirCerrarCarga}>Crear Evento</Button>
        <Grid container spacing={3}>
            {ejemplo}
            {itemsEventos}
        </Grid>

        <Modal open={modalEvento} onClose={abrirCerrarCarga}>
            {bodyModal}
        </Modal>
        </div>
    )
}
