import React from 'react'
import clsx from 'clsx';
import { Link } from 'react-router-dom'

//Estilos de Material UI
import { makeStyles } from '@material-ui/core/styles';


//Elementos de Material UI
import {CssBaseline, Drawer, AppBar, Toolbar, Typography,
    Divider, IconButton, Button } from '@material-ui/core';

//Iconos de Material UI
import { Menu, ArrowLeft } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
}));

export default function Appbar() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  

    return (
        <>
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
                    Vaca Stats
                </Typography>
                <Link to='/'><Button>CERRAR SESION</Button></Link>
            </Toolbar>
        </AppBar>

        <Drawer
        classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
          <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
              <ArrowLeft />
              </IconButton>
          </div>
          <Divider />
              <Link to='/home'>Menu</Link>
          <Divider />

          <Divider />
              <p>Campo X</p>
          <Divider />

          <Divider />
              <Link to='/lote'>Lote N</Link>
          <Divider />

          <Divider />
              <Link to='/personal'>Personal</Link>
          <Divider />

          <Divider />
              <Link to='/finanzas'>Finanzas</Link>
          <Divider />

        </Drawer>
        </>
    
    )
}
