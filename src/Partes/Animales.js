import React, {useState}from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Modal} from '@material-ui/core';

//Mis cosas
import vacaIco from './../Icons/vaca.svg'
import vacasArray from './../Test/vacasArray.js'

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

    const [data, setData] = useState({
        id:'',
        texto:'',
        vacuna: false
    })

    const abrirModalVaca = () => {
        setModalVaca(true)
    }
    
    const cerrarModalVaca = () => {
        setModalVaca(false)
        data.id = ''
        data.texto = ''
        data.vacuna = false
    }

    const seleccionarVaca = (vaca) => {
        setData(vaca)
        abrirModalVaca()
    }

    const mostrarVacas = (vacaLista) => {
        return (vacaLista.map(vaca => { return(
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4} >
                    <Button type='button'
                        onClick={() => seleccionarVaca(vaca)}><img src={vacaIco} alt='Vaca' style={{width:64, height:64}}/></Button>
                    <p>{vaca.id}</p>
                </Grid>
            </Grid>
        )}))
    }

    const bodyVaca = (
        <div className={styles.modal}>
        <p>{data.vacuna}</p>
        </div>
    )

  return (
    <div className={styles.root}>
        <Grid container spacing={1}>
            {mostrarVacas(vacasArray)}
        </Grid>
        

        <Modal open={modalVaca}
            onClose={cerrarModalVaca}>
            {bodyVaca}
        </Modal>

    </div>
  );
}
