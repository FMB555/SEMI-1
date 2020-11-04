import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Button, Typography, Modal } from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import ModalCargaTarea from './ModalCargaTarea'


const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 100,
      minHeight: 100,
      alignItems: 'center'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    modal: {
        position: 'absolute',
        width: '75%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        overflowY: 'auto',
        maxHeight: 'calc(100vh - 210px)'
    }
  }));

export default function SimpleCard() {
  const classes = useStyles();
  
  const [cargaTarea, setCargaTarea] = React.useState(false);

  const abrirCargaTarea = () => {
    setCargaTarea(true)
  }

  const cerrarCargaTarea = () => {
    setCargaTarea(false)
  }

  return (
    <>
    <Card className={classes.root}>
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          <b>Crear Tarea</b>
        </Typography>

        <Button onClick={abrirCargaTarea}>
            <AddCircle/>
        </Button>

      </CardContent>
    </Card>

    <Modal
        open={cargaTarea}
        onClose={cerrarCargaTarea}>
          <div className={classes.modal}>
            <ModalCargaTarea/>
          </div>
    </Modal>
    </>
  );
}