import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

//<SimpleReactCalendar activeMonth={new Date()} />



export default function Calendario() {

  return (     
    <div>
      <Calendar value={new Date()}/><br/>
    </div>)
}