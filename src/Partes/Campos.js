import React, {useState}from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Modal, Card, CardContent, CardActions, Typography, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Checkbox} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '100%',
        minHeight: '100%',
        height: 240,
        
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
    card : {
        flexGrow: 1,
        minWidth: 150,
        maxWidth: 275,
        width: '100%',
        height: 175,
        display: 'flex',
        flexDirection: 'column',
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

    const [modalVacuna, setModalVacuna] = useState(false)

    const abrirCerrarModalVacuna = () => {
        setModalVacuna(!modalVacuna)
    }

    const mostrarVacas = (
        <div className={classes}>
            <div className={classes.cardGrid}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Campo 1
                        </Typography>
                    </CardContent>
                </Card>
            
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Campo 2
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )


  return (
    <div className={classes}>
        <Grid container spacing={1}>
            {mostrarVacas}
        </Grid>
    </div>
  );
}
