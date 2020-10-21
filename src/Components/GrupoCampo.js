import React from 'react'

//Imports Material UI
import {Collapse, List, ListItem, ListItemText, Divider, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//Iconos de Material UI
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    boton: {
        width: '100%'
    }
}));



export default function GrupoCampo() {
    const classes = useStyles();

    const [campoOpen, setCampoOpen] = React.useState(false);
    const handleCampoOpen = () => {
        setCampoOpen(!campoOpen)
    }

    return (
        <div>
            <Divider />
            <ListItem>
                {campoOpen ? <ExpandLess onClick={handleCampoOpen}/> : <ExpandMore onClick={handleCampoOpen} />} [Nombre Campo]
            </ListItem>
                <Collapse in={campoOpen}>
                    <List component="nav">
                        <ListItem>
                            <ListItemText>
                                <Button href="/lote" className={classes.boton}>
                                    Lote N
                                </Button>
                            </ListItemText>
                        </ListItem>
                        <Divider />

                        <ListItem>
                            <ListItemText>
                                <Button href="/personal" className={classes.boton}>
                                    Personal
                                </Button>
                            </ListItemText>
                        </ListItem>
                        <Divider />

                        <ListItem>
                            <ListItemText>
                                <Button href="/finanzas" className={classes.boton}>
                                    Finanzas
                                </Button>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Collapse>
                <Divider/>
            
        </div>
    )
}
