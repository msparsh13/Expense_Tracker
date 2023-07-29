import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  import { useGlobalContext } from "../context/globalcontext";


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );





function Chart3(){
    var date= new Date() ;
    var date2 = new Date(date.getFullYear(), date.getMonth(), 1);
    var date1= new Date() ;

    const {incomes , expenses} = useGlobalContext()
    var total_monthlyincome = 0  
     
         incomes.map((income) => {
            const {_id, title, amount, date, Category, note} = income;
            var x = new Date(income.date)
      
      
          if(x.valueOf()<=date1.valueOf() && x.valueOf() >=date2.valueOf() ){
         total_monthlyincome =total_monthlyincome +income.amount
   
    }})


   console.log( total_monthlyincome) ;

    var total_monthlyexpense= 0  
     
    expenses.map((income) => {
       const {_id, title, amount, date, Category, note} = income;
       console.log(income)
       var x = new Date(income.date)
 
 
     if(x.valueOf()<=date1.valueOf() && x.valueOf() >=date2.valueOf() ){
    total_monthlyexpense = total_monthlyexpense+ income.amount  

}})

console.log( total_monthlyexpense) 



const options = {
        indexAxis: 'y',
        color : "black"

}
 
  const data = {
    labels : ["Monthly Budget"] ,
  datasets: [
    {
      label: 'total income this month',
      data: [total_monthlyincome] ,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Total expense this month',
      data:  [total_monthlyexpense],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  
  
  

    return(
      

<Bar  options={options} data={data}/>
    )
}

export default Chart3