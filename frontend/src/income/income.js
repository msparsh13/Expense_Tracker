import react, { useEffect } from 'react'
import { useState } from 'react'
import './income.css'
import { useGlobalContext } from '../context/globalcontext'


import { GlobalProvider  } from '../context/globalcontext'

import Item from './incomeitem'
import IForm from '../form/form'
import Form from './form'
import { Chart_inc } from '../chart/chart-income'
function Income(){
  
    const {addIncome,incomes, getIncomes, deleteIncome, totalIncome , getoneIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    }, [])

   console.log(incomes)
    return (
        <>
                <div>
                <div className="total-income">
                <h2>Total Income: <span>${totalIncome()}</span></h2>
                <div className='chart'>
                <Chart_inc/>
                </div>
                </div>
                </div>
                    <div className="list-box">
                    <div className="Form">
                    <IForm />
                    </div>
                    <div className='income-list'>
                    {incomes.map((income) => {
                            const {_id, title, amount, date, Category, note} = income;
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
                        })}
                        </div>
                    </div>
               
                </>
    )
} // map this to donut chart 


export default Income