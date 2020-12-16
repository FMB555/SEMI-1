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
    card: {
      height: '160px'
    }
  }));

export default function Eventos() {
  const classes = useStyles();

  let eventosArray = [
    {
      id: 1,
      desde: "16-12-2020",
      hasta: null,
      detalle: "Demostración",
    },
    {
      id: 2,
      desde: "21-12-2020",
      hasta: "23-12-2020",
      detalle: "Vacunar animales",
    },
    {
      id: 3,
      desde: "24-12-2020",
      hasta: "25-12-2020",
      detalle: "Celebrar las fiestas",
    },
  ]
  
  
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
  
  const [eventos, setEventos] = useState(eventosArray)

  const addEvento = (e) => {
      e.preventDefault()

      let nuevoEvento = {
          id: eventos.length + 1,
          desde: fechaDesde,
          hasta: fechaHasta,
          detalle: detalle
      }

      setDesde(null)
      setHasta(null)
      setDetalle("")

      let arrayEventos = [...eventos, nuevoEvento]

      setEventos(arrayEventos)
      setModal(false)
  }
  
  let eventosDisplay = eventos.map( evento => (
      <Grid item xs={3} key={evento.id}>
          <Card className={classes.card}>
            <CardActionArea className={classes.card}>
                <CardContent>
                    <Typography variant="h6" component="h5">{evento.desde}</Typography>
                    <Typography variant="h6" component="h5">{(evento.hasta !== null) ? evento.hasta: <br/>}</Typography>
                    <Typography variant="subtitle1" component="h1">{evento.detalle}</Typography>
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
          <TextField id="Detalle" label="Detalle" variant="outlined" type="text" onChange={handleDetalle} multiline={true} required fullwidth="true" rows={5}/>
          </Grid>
        </Grid>
        <br/>
        <Button type="submit" variant="contained" color="primary" onClick={addEvento}>Crear</Button>
      </form>
    </div>
  )

    return (
        <div>
        <Button color="primary" variant="contained" onClick={abrirCerrarCarga}>Crear Evento</Button>
        <br/><br/>
        <Grid container spacing={3}>
            {eventosDisplay}
        </Grid>
        <Modal open={modalEvento} onClose={abrirCerrarCarga}>
            {bodyModal}
        </Modal>
        </div>
    )
}
