import React from 'react';

import {Button, CssBaseline, TextField, Link, Grid, Typography, Box, Container} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import logo from '../Icons/vacastats.png'

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
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#009CA6",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#00818a",
    }
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <img src={logo} alt="Vaca Stats" height="120" />
        <Typography component="h1" variant="h5">
            Recuperar contraseña
        </Typography>
        <form className={classes.form} noValidate>
            <Grid container spacing={2}> 
            <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Correo electrónico"
                    name="email"
                    autoComplete="email"
                />
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Continuar
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="/" variant="body2">
                        Regresar
                    </Link>
                </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}