import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

//Elementos de Material UI
import { Grid, Button, Modal, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//<SimpleReactCalendar activeMonth={new Date()} />


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


export default function Calendario() {
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
        <Button type="submit" variant="contained" color="primary">Crear</Button>
      </form>
    </div>
  )

  return (     
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Calendar value={new Date()}/>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <Button color="primary" variant="contained" onClick={abrirCerrarCarga}>Crear Evento</Button>
          <h4>Proximos eventos</h4>
          <div style={{textAlign: 'left'}}>
            <ul>
              <li>Fecha - Vacunar X animal</li>
              <li>Fecha - Vacunar Y animal</li>
              <li>Fecha - Acercamiento de fecha de celo</li>
              <li>Fecha - Vencimiento de Z tarea</li>
            </ul>

          </div>
        </Grid>
      </Grid>
      <Modal open={modalEvento} onClose={abrirCerrarCarga}>
        {bodyModal}
      </Modal>
    </div>)
}