import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect } from 'react';
import { useGlobalContext } from '../context/globalcontext';
import Expenses from '../expenses/expenses';
ChartJS.register(ArcElement, Tooltip, Legend);





export  const Chart_exp = () => {

    const {expenses , getExpenses } = useGlobalContext()



   console.log("hello") ;
   const data = {
    
      labels: expenses.map((inc)=>{
       const {date} = inc ;
        return date
   }),
    datasets: [{
      label: 'Expenses',
      data: [...expenses.map((inc)=>{
        const {amount} = inc ;
        return amount 
      })],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }


  const options =  {
    plugins: {
        legend: {
            display: false,}}}

        return (
            <div>
                <Doughnut options={options} data={data}/>
            </div>
        )
  
}