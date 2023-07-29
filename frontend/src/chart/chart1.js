import React from "react";
import { Chart as ChartJs ,  CategoryScale , LinearScale , PointElement , LineElement , Title , Tooltip , Legend , ArcElement  } from "chart.js"
import { Line } from "react-chartjs-2";
import { useGlobalContext } from "../context/globalcontext";



ChartJs.register(CategoryScale , LinearScale , PointElement , LineElement , Title , Tooltip , Legend , ArcElement);

function Chart1(){
    const {incomes ,  expenses} = useGlobalContext()
     const data = {
       labels: incomes.map((inc)=>{
        const {date} = inc ;
         return date
       }),

     datasets: [
        {
            id : 1 , 
            label : 'Income',
          data :  [...incomes.map((inc)=>{
            const {amount} = inc ;
            return amount 
          })],
        backgroundColor : 'green'} , 



          {
            id : 2 ,
            label : 'Expenses',
          data:  [...expenses.map((inc)=>{
            const {amount} = inc ;
            return amount
          })] ,
          color : "black" , 
          backgroundColor : 'red'
        }
     ] 
   
     }
    return(
        <div>
           <Line datasetIdKey='id' data={data}/>

        </div>
    )
}


export default Chart1

