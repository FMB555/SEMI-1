import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Modal,
        Card, CardContent, Typography, //CardActions,                                 //Cards
        Collapse, List, ListItem, ListItemText } from '@material-ui/core'

//Iconos de Material UI
import { ExpandLess, ExpandMore } from '@material-ui/icons';
//Mis cosas
import farmerIco from './../Icons/farmer.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: '100%',
        minHeight: '100%',
        height: 240,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paperModal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    card : {
        flexGrow: 1,
        minWidth: 150,
        maxWidth: 275,
        width: '100%',
        height: 175,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        fontSize: 10

    }
}));

export default function Animales() {
    const classes = useStyles();

    const [modalOpen, setModalOpen] = React.useState(false);
    
    const handleModalOpen = () => {
      setModalOpen(true);
    }
    const handleModalClose = () => {
      setModalOpen(false);
    }
    const [doneOpen, setDoneOpen] = React.useState(false);
    const handleDone = () => {
      setDoneOpen(!doneOpen);
    }
    const [incompleteOpen, setIncompleteOpen] = React.useState(false);
    const handleIncomplete = () => {
      setIncompleteOpen(!incompleteOpen);
    }

    const mostrarEmpleado = (
        <>
            <Grid item xs={12} sm={4} md={3}>
                <Card className={classes.card}>
                    <CardContent>
                        <Button size="small" onClick={handleModalOpen}>
                            <img src={farmerIco} alt='empleado' style={{width:64, height:64}}/>
                        </Button>
                        <Typography variant="h5" component="h2">
                            Augusto
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Tareas por hacer: 
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Card className={classes.card}>
                    <CardContent>
                        <Button size="small" onClick={handleModalOpen}>
                            <img src={farmerIco} alt='empleado' style={{width:64, height:64}}/>
                        </Button>
                        <Typography variant="h5" component="h2">
                            Lucas
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Tareas por hacer: 
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
                <Card className={classes.card}>
                    <CardContent>
                        <Button size="small" onClick={handleModalOpen}>
                            <img src={farmerIco} alt='empleado' style={{width:64, height:64}}/>
                        </Button>
                        <Typography variant="h5" component="h2">
                            Nico
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Tareas por hacer: 
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )

    const bodyEmpleado = (
        <div className={classes.paperModal}>
                <h2 id="simple-modal-title" align="center">Empleado 1</h2>
                <List>
                <ListItem>
                    {doneOpen ? <ExpandLess onClick={handleDone}/> : <ExpandMore onClick={handleDone} />} Tareas hechas: <b>4</b>
                </ListItem>
                    <Collapse in={doneOpen}>
                    <List component="nav" aria-label="completas" className={classes.list}>
                        <ListItem>
                        <ListItemText secondary="Tarea 1" />
                        </ListItem>
                        <ListItem>
                        <ListItemText secondary="Tarea 4" />
                        </ListItem>
                        <ListItem>
                        <ListItemText secondary="Tarea 5" />
                        </ListItem>
                        <ListItem>
                        <ListItemText secondary="Tarea 6" />
                        </ListItem>
                    </List>
                    </Collapse>
                <ListItem>
                    {incompleteOpen ? <ExpandLess onClick={handleIncomplete} /> : <ExpandMore onClick={handleIncomplete} />} Tareas en desarrollo: <b>3</b>
                </ListItem>
                    <Collapse in={incompleteOpen}>
                    <List component="nav" aria-label="incompletas" className={classes.list}>
                        <ListItem checklist>
                        <ListItemText secondary="Tarea 2" />
                        </ListItem>
                        <ListItem>
                        <ListItemText secondary="Tarea 3" />
                        </ListItem>
                        <ListItem>
                        <ListItemText secondary="Tarea 7" />
                        </ListItem>
                    </List>
                    </Collapse>
                <ListItem>
                    Tareas asignadas: <b>7</b>
                </ListItem>
                </List>
            </div>
    )

  return (
    <div className={classes.root}>
        <Grid container spacing={1}>
            {mostrarEmpleado}
        </Grid>
        
        <Modal open={modalOpen}
            className={classes.modal}
            onClose={handleModalClose}>
            {bodyEmpleado}
        </Modal>
        

    </div>
  );
}
