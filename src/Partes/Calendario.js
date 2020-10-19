import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


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
        <Calendar onChange={this.onChange} value={this.state.date} selectRange='true'/>
    </div>)
  }
}

export default Calendario