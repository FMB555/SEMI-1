import React, {useState} from 'react';
import { Link } from 'react-router-dom'

//Estilos de Material UI
import { makeStyles } from '@material-ui/core/styles';

//Elementos de Material UI
import { Box, Typography, Container, Grid, Paper,
        TableContainer, Table, TableHead, TableRow, TableCell, TableBody,
        TextField, Button, FormControl, InputLabel, Select, MenuItem
      } from '@material-ui/core';

//Iconos de Material UI


//Nuestros componentes
import MiAppbar from '../Components/Appbar'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

  const [gastos, setGastos] = useState([])

  const addGasto = (e) => {
    e.preventDefault()
    
    let hoy = new Date()

    let nuevoGasto = {
        fecha: (hoy.getDate() + "/" + (hoy.getMonth() +1) + "/" + hoy.getFullYear()),
        detalle: detalle,
        etiqueta: tag,
        precio: precio
    }

    setDetalle("")
    setTag("")
    setPrecio("")

    let arrayGastos = [...gastos, nuevoGasto]

    setGastos(arrayGastos)

    console.log(arrayGastos)
  }

  const itemsGastos = gastos.map( gasto => (
    <TableRow>
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
              <h1>[Nombre Campo]</h1>
              <h2>[n] Hectáreas</h2>
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
                      <TableRow>
                          <TableCell>17/11/2020</TableCell>
                          <TableCell>Vacunas</TableCell>
                          <TableCell>Animales</TableCell>
                          <TableCell>$69</TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell>17/11/2020</TableCell>
                          <TableCell>Comida para el personal</TableCell>
                          <TableCell>Personal</TableCell>
                          <TableCell>$420</TableCell>
                      </TableRow>

                      {itemsGastos}

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

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
    </>
  );
}