import React, {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import vacaIco from './../Icons/vaca.png'
import {Button, Grid, Modal} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    root: {
        flexGrow: 1,
  }
}));

export default function Animales() {
    const styles = useStyles();

    const [modalVaca, setModalVaca] = useState(false)

    const abrirCerrarModalVaca = () => {
        setModalVaca(!modalVaca)
    }

    const bodyVaca = (
        <div className={styles.modal}>
            <p>Skere</p>
        </div>
    )

  return (
    <div className={styles.root}>
        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    <Button type='button' onClick={() => setModalVaca(!modalVaca)}><img src={vacaIco} alt='vaquita.png'/></Button>
                    <p>XX_NNN</p>
                </Grid>
            </Grid>
        </Grid>

        <Modal open={modalVaca}
            onClose={abrirCerrarModalVaca}>
            {bodyVaca}
        </Modal>

    </div>
  );
}
