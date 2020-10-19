import React, {useState}from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Modal, Card, CardContent, CardActions, Typography, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Checkbox} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

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
    },

}));


export default function Tareas() {
    const classes = useStyles();
    
    const [tareas, setModalVacuna] = useState(false)

    const abrirCerrarModalTareas = () => {
        setModalVacuna(!tareas)
    }


    const Tareas = (
        <div className={classes.modal}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Responsable</TableCell>
                            <TableCell>Campo</TableCell>
                            <TableCell>Lote</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Realizada</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>Vacunar</TableCell>
                            <TableCell>Juan Pieczocha</TableCell>
                            <TableCell>Campo 1</TableCell>
                            <TableCell>Lote 2</TableCell>
                            <TableCell>31/10/2020</TableCell>
                            <TableCell><Checkbox/></TableCell>
                        </TableRow>
                    </TableBody>

                    <TableBody>
                        <TableRow>
                            <TableCell>Llevar al matadero</TableCell>
                            <TableCell>Juan Pieczocha</TableCell>
                            <TableCell>Campo 1</TableCell>
                            <TableCell>Lote 1</TableCell>
                            <TableCell>27/11/2020</TableCell>
                            <TableCell><Checkbox/></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )



  

  return (
    <div>
        <Button>Agregar Tareas</Button>
        <Button onClick={abrirCerrarModalTareas}>Ver Tareas</Button>
        <Button>Eliminar Tareas</Button>


        <Modal open={tareas} onClose={abrirCerrarModalTareas}>
            {Tareas}
        </Modal>
      
 
    </div>
  );
}
