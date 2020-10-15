//Import de React
import React from 'react';
import { useHistory } from 'react-router-dom';

//Import Material UI Core
import {Button, CssBaseline, TextField, FormControlLabel,
        Checkbox, Link, Grid, Box, Typography, Container} from '@material-ui/core'

//Estilos Material UI
import { makeStyles } from '@material-ui/core/styles';

//Mis iconos
import logo from './../Icons/vacastats.png'


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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#009CA6",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#009AA6",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#00818a",
    }
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt="Vaca Stats" height="120" />
        <Typography component="h1" variant="h5">
          Vaca Stats
        </Typography>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Constraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <Button
            type="root"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{history.push('/home')}}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="password" variant="body2">
                ¿Olvidaste la contraseña?
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="signUp" variant="body2">
                {"Crear cuenta"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}