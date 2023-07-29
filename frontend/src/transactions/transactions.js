import React from "react";
import ReactDatePicker from "react-datepicker";
import { useGlobalContext } from "../context/globalcontext";
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
import { Chart } from "chart.js";
import axios from "axios";
import { useEffect } from "react";
import Item from "../income/incomeitem";
import { Chart2 } from "../chart/chart-income";
import Chart3 from "../chart/monthly-chart";
import './transaction.css'

 export default function Transactions(){


    const {incomes , expenses , getIncomes , deleteIncome} = useGlobalContext() ;
       useEffect(() =>{
        getIncomes()
    }, [])

    var date = new Date();
      var date2 = new Date(date.getFullYear(), date.getMonth(), 1);
      var date1= new Date() ;
    
      //i can just check for all income and expenses 

      
      return (<div className="thismonth">
    <div className="monthlybudget">
     
  <div className='list'>
   
  <h2>Income</h2>


     { incomes.map((income) => {
      const {_id, title, amount, date, Category, note} = income;
      console.log(income)
      var x = new Date(income.date)


    if(x.valueOf()<=date1.valueOf() && x.valueOf() >=date2.valueOf() ){
      return <Item
          key={_id}
          id={_id} 
          title={title} 
          note ={note}
          amount={amount} 
          date={date} 
          Category={Category} 
          deleteItem={deleteIncome} 
      />
  }})}
</div>
    
  <div className="list">
    <h2>Expenses</h2>
  { expenses.map((i) => {
      const {_id, title, amount, date, Category, note} = i;
      
      var x = new Date(i.date)


    if(x.valueOf()<=date1.valueOf() && x.valueOf() >=date2.valueOf() ){
      return <Item
          key={_id}
          id={_id} 
          title={title} 
          note ={note}
          amount={amount} 
          date={date} 
          Category={Category} 
          deleteItem={deleteIncome} 
      />
  }})}
  </div>
  </div>

  <div className="monthlychart">
    <Chart3 date={date1} date3={date2}/>
    </div>
 
</div>
      )
    } //things to do now map it to chart
  