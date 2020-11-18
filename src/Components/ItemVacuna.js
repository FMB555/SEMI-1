import React, { useState } from 'react'

import {TableRow, TableCell, TableBody, Checkbox} from '@material-ui/core'

export default function ItemVacuna() {

    const [aplicada, setAplicada] = useState(false)
    const [habilitado, setHabilitado] = useState(false)
    const handleAplicacion = (e) => {
        setAplicada(true)
        setHabilitado(false)
    } 

    return (
        <div>
            <TableBody>
                <TableRow>
                    <TableCell>Antiparasitario</TableCell>
                    <TableCell>Primera</TableCell>
                    <TableCell>31/10/2020</TableCell>
                    <TableCell><Checkbox checked={aplicada} disabled={habilitado} onChange={handleAplicacion}/></TableCell>
                </TableRow>
            </TableBody>
        </div>
    )
}
