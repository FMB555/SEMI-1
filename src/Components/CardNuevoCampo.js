import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Button, Typography,  //Card
        Modal} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';
import ModalCargaCampo from './ModalCargaCampo'


const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 200,
      minHeight: 250
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    modal: {
        position: 'absolute',
        width: '90%',
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
  
  const [cargaCampo, setCargaCampo] = React.useState(false);

  const abrirCargaCampo = () => {
    setCargaCampo(true)
  }

  const cerrarCargaCampo = () => {
    setCargaCampo(false)
  }

  return (
    <>
    <Card className={classes.root}>
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          <b>Cargar nuevo campo</b>
        </Typography>

        <Button onClick={abrirCargaCampo}>
            <AddCircle/>
        </Button>

      </CardContent>
    </Card>

    <Modal
        open={cargaCampo}
        onClose={cerrarCargaCampo}>
          <div className={classes.modal}>
            <ModalCargaCampo/>
          </div>
    </Modal>
    </>
  );
}