import React from 'react'

//Estilos de Material UI
import { makeStyles } from '@material-ui/core/styles';

//Elementos de Material UI
import { Collapse, List, Paper, Modal, ListItem, ListItemText } from '@material-ui/core'

//Iconos de Material UI
import { ExpandLess, ExpandMore, AssignmentOutlined } from '@material-ui/icons';


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
    worker: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #999',
        width: '70%',
        borderRadius: 5,
        alignSelf: 'center',
        margin: 5,
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function EmpleadosModal() {
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
    

    return (
        <>
        <Paper className={classes.worker}>
            <p>Empleado 1 
            <AssignmentOutlined color="primary" onClick={handleModalOpen} />
            </p>
        </Paper>
        <Paper className={classes.worker}>
            <p>Empleado 2 
            <AssignmentOutlined color="primary" onClick={handleModalOpen} />
            </p>
        </Paper>
        <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="simple-modal-title"
            className={classes.modal}>
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
        </Modal>
        </>
    )
}
