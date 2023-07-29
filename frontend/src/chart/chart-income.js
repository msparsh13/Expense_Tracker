import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { useEffect } from 'react';
import { useGlobalContext } from '../context/globalcontext';
ChartJS.register(ArcElement, Tooltip, Legend);





export  const Chart_inc = () => {

    const {incomes , getIncomes} = useGlobalContext()



   console.log("hello") ;
   const data = {
    
      labels: incomes.map((inc)=>{
       const {title} = inc ;
        return title
   }),
    datasets: [{
      label: 'Incomes',
      data: [...incomes.map((inc)=>{
        const {amount} = inc ;
        return amount 
      })],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }],   
  }


  const options =  {
    plugins: {
        legend: {
            display: false,}}}

        return (
            <div>
                <Doughnut options={options} data={data}  />
            </div>
        )
  
}

