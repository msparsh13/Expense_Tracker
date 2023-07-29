import react, { useEffect } from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../context/globalcontext'


import { GlobalProvider  } from '../context/globalcontext'

import Item from '../income/incomeitem'

import { Chart_exp } from '../chart/chart-expense'
import EForm from './expenseitem'


import '../income/income.css'
function Expenses(){
  
    const {addExpense, expenses, getExpenses, deleteExpense, totalExpense} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])


    console.log(expenses)

    return (
        <>
                <div>
                <div className="total-income">
                    <h2>Total Expenses: <span>${totalExpense()}</span></h2>
                    <Chart_exp/>
                </div>
                </div>
                    <div className="list-box">
                    <div className="Form">
                    <EForm/>
                    </div>
                    <div className='income-list'>
                    {expenses.map((income) => {
                            const {_id, title, amount, date, Category, note} = income;
                            return <Item
                                key={_id}
                                id={_id} 
                                title={title} 
                                note ={note}
                                amount={amount} 
                                date={date} 
                                Category={Category} 
                                deleteItem={deleteExpense}
                            />
                        })}
                        </div>
                    </div>
               
                </>
    )
} // map this to donut chart 


export default Expenses