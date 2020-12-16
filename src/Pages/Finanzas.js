import React, {useState} from 'react';
import { Link } from 'react-router-dom'

//Estilos de Material UI
import { makeStyles } from '@material-ui/core/styles';

//Elementos de Material UI
import { Typography, Container, Grid, Paper,
        TableContainer, Table, TableHead, TableRow, TableCell, TableBody,
        TextField, Button, FormControl, InputLabel, Select, MenuItem
      } from '@material-ui/core';

//Nuestros componentes
import MiAppbar from '../Components/Appbar'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  cargaDatos: {
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: 12
  },
  formControl: {
    margin: theme.spacing(1),
    width: 150,
    marginLeft: 20
  },
  
}));

export default function Dashboard() {
  const classes = useStyles();
  
  const data = [
    {
      id: 0,
      fecha: "14/12/2020",
      detalle: "Vacunas",
      etiqueta: "Animales",
      precio: 1500
    },
    {
      id: 1,
      fecha: "14/12/2020",
      detalle: "Comida para los empleados",
      etiqueta: "Personal",
      precio: 800
    },
    {
      id: 2,
      fecha: "15/12/2020",
      detalle: "Combustible para la camioneta",
      etiqueta: "Maquinaria",
      precio: 3000
    },
    {
      id: 3,
      fecha: "15/12/2020",
      detalle: "Pagar al transportista",
      etiqueta: "Otro",
      precio: 700
    },
  ]

  const [gastos, setGastos] = useState(data)

  
  const [total, setTotal] = useState(6000)
  const calcularTotal = (ult) => {
    let newTotal = 0
    var i = 0
    for(i = 0; i < gastos.length; i++){
      newTotal += gastos[i].precio
    }
    newTotal += ult
    console.log("Nuevo total: ",newTotal)
    setTotal(newTotal)
  }

  
    const [detalle, setDetalle] = useState("")
    const handleDetalle = (e) => {
      setDetalle(e.target.value)
    }
  
    const [tag, setTag] = useState("")
    const handleTag = (e) => {
      setTag(e.target.value)
    }
  
    const [precio, setPrecio] = useState(0)
    const handlePrecio = (e) => {
      setPrecio(e.target.value)
    }
  const addGasto = (e) => {
    e.preventDefault()
    
    let hoy = new Date()

    let nuevoGasto = {
      id: gastos.length,
      fecha: (hoy.getDate() + "/" + (hoy.getMonth() +1) + "/" + hoy.getFullYear()),
      detalle: detalle,
      etiqueta: tag,
      precio: parseFloat(precio)
    }

    setDetalle("")
    setTag("")
    setPrecio(0)

    let arrayGastos = [...gastos, nuevoGasto]

    setGastos(arrayGastos)
    calcularTotal(nuevoGasto.precio)
  }

  const itemsGastos = gastos.map( gasto => (
    <TableRow key={gasto.id}>
        <TableCell>{gasto.fecha}</TableCell>
        <TableCell>{gasto.detalle}</TableCell>
        <TableCell>{gasto.etiqueta}</TableCell>
        <TableCell>$ {gasto.precio}</TableCell>
    </TableRow>
  ))

  return (
    <>
    <div className={classes.root}>
      <MiAppbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid item xs={12}>
          <Grid container>
            <Grid item xs={1}>
              <Link to='/personal'><Button size="small" color="secondary">Personal</Button></Link>
            </Grid>
            <Grid item xs={10}>
              <h1>Mi campo</h1>
            </Grid>
            <Grid item xs={1}>
              <Link to='/lote'><Button size="small" color="secondary">Lotes</Button></Link>
            </Grid>
          </Grid>

            <Paper className={classes.paper}>

            <TableContainer>
                <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Detalle</TableCell>
                        <TableCell>Etiqueta</TableCell>
                        <TableCell>Precio</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>

                      {itemsGastos}
                      
                      <TableRow>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                          <TableCell>Total</TableCell>
                          <TableCell>$ {total}</TableCell>
                      </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
            <div className={classes.cargaDatos}>
                <h2>Cargar Gastos</h2>
                <form>
                    <TextField className={classes.formControl} value={detalle} id="Detalle" label="Detalle" variant="outlined" onChange={handleDetalle} type="text" multiline required/>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label" value={tag}>Etiqueta</InputLabel>
                      <Select placeholder="Etiqueta" onChange={handleTag} id="Precio" required>
                        <MenuItem value=""><em></em></MenuItem>
                        <MenuItem value={"Animales"}>Animales</MenuItem>
                        <MenuItem value={"Personal"}>Personal</MenuItem>
                        <MenuItem value={"Maquinaria"}>Maquinaria</MenuItem>
                        <MenuItem value={"Otros"}>Otros</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField className={classes.formControl} value={precio} id="precio" label="Precio" variant="outlined" type="number" onChange={handlePrecio} />
                    <br/><br/>
                    <Button color="primary" variant="contained" type="submit" onClick={addGasto}>Cargar gasto</Button>
                </form>
            </div>
            </Paper>
          </Grid>
        </Container>
      </main>
    </div>
    </>
  );
}