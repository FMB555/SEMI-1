import React from 'react';
import clsx from 'clsx';

//Estilos de Material UI
import { makeStyles } from '@material-ui/core/styles';

//Elementos de Material UI
import { Collapse, List, CssBaseline, Drawer, Box, AppBar, Toolbar, Typography,
        Divider, IconButton, Container, Grid, Paper, Link, Modal,
        ListItem, ListItemText } from '@material-ui/core';

//Iconos de Material UI
import { Menu, ExpandLess, ExpandMore, AssignmentOutlined } from '@material-ui/icons';

//Nuestras partes
import Animales from './Animales'
//import Estadistica from '../Partes/Estadistica'


/*Tareas
a: Crear modal vacunas
b: Crear Cuadro de estadisticas
c: Crear Cuadro animales
d: Crear Cuadro empleados*/

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
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

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
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
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <Menu />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Vaca stats
          </Typography>
          <IconButton color="inherit">
       
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
          
          </IconButton>
        </div>
        <Divider />
            <p>Menu</p>
        <Divider />
      
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <p>Animales</p>
                <Animales />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <h3>Empleados</h3>
                <paper className={classes.worker}>
                  <p>Empleado 1 
                    <AssignmentOutlined color="primary" onClick={handleModalOpen} />
                  </p>
                </paper>
                <paper className={classes.worker}>
                  <p>Empleado 2 
                    <AssignmentOutlined color="primary" onClick={handleModalOpen} />
                  </p>
                </paper>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <h3>Estadísticas generales</h3>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
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
  );
}