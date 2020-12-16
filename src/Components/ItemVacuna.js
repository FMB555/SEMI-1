import React, { useState } from 'react'

import {TableRow, TableCell, TableBody, Checkbox} from '@material-ui/core'

export default function ItemVacuna(props) {

    const vacuna = props.vacuna

    const [aplicada, setAplicada] = useState(vacuna.aplicada)
    const [deshabilitado, setDeshabilitado] = useState(false)
    const handleAplicacion = (e) => {
        setAplicada(true)
        setDeshabilitado(false)
    } 

    return (
        <TableRow>
            <TableCell>{vacuna.nombre}</TableCell>
            <TableCell>{vacuna.dosis}</TableCell>
            <TableCell>{vacuna.fecha}</TableCell>
            <TableCell><Checkbox checked={aplicada} disabled={deshabilitado} onChange={handleAplicacion}/></TableCell>
        </TableRow>
    )
}
