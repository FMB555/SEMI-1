import React from 'react'

//Impor de gráficos
import { Bar } from 'react-chartjs-2'

export default function Estadisticas() {

    const data = {
        labels: ['Tareas Vacas Hechas', 'Tareas Vacas Por Hacer', 'Tareas Manteniento Hechas', 'Tareas Manteniento Por Hacer','Tareas De Lotes Hechas', 'Tareas De Lotes Por Hacer'],
        datasets: [{
            label: 'Tareas',
            backgroundColor: 'rgba(0,250,1)',
            borderColor: 'black',
            borderWith: 1,
            hoverBackgroundColor: 'rgba(0,250,0.2)',
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
