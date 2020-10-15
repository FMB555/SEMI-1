import React from 'react'

//Impor de gráficos
import { Bar } from 'react-chartjs-2'

export default function Estadisticas() {

    const data = {
        labels: ['Tareas 1', 'Tareas 2', 'Tareas 3', 'Tareas 4','Tareas 5', 'Tareas 6'],
        datasets: [{
            label: 'Tareas completadas',
            backgroundColor: 'rgba(55,0,173)',
            borderColor: 'black',
            borderWith: 1,
            hoverBackgroundColor: 'rgba(115,0,173)',
            hoverBorderColor: '#FF0000',
            data: [10,11,20,19,3,9]
        }]
      }

      const opciones = {
        maintainAspectRatio: false,
        responsive: true
      }
    return (
        <div>
           <Bar data={data} opciones={opciones}/> 
        </div>
    )
}
