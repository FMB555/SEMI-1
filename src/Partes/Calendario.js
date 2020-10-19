import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

//Elementos de Material UI
import { Grid } from '@material-ui/core';

//<SimpleReactCalendar activeMonth={new Date()} />

class Calendario extends Component {
  state = {
    date: new Date(),
  }
  onChange = date => this.setState({ date })

  divStyle = {
      height: '100%',
      width: '100%'
  }


  render() {
    return (     
    <div style={this.divStyle}>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Calendar onChange={this.onChange} value={this.state.date} selectRange='true'/>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <h4>Proximos eventos</h4>
          <div style={{textAlign: 'left'}}>
          <ul>
            <li>Fecha - Vacunar X animal                 </li>
            <li>Fecha - Vacunar Y animal                 </li>
            <li>Fecha - Acercamiento de fecha de celo    </li>
            <li>Fecha - Vencimiento de Z tarea           </li>
          </ul>
          </div>
        </Grid>
      </Grid>
    </div>)
  }
}

export default Calendario