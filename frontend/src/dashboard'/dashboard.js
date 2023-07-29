import react from 'react'
import T_income from './total_income'
import T_expense from './total_expense'
import Chart1 from '../chart/chart1'
import { useGlobalContext } from '../context/globalcontext'
import { useEffect } from 'react'
import './dashboard.css'
import T_amount from './total-amount'
function Dashboard(){


    const {getExpenses , getIncomes} = useGlobalContext() ;
    useEffect(() =>{
        getExpenses()
        getIncomes()
    }, []) 

    return (
       <>
<div className="total">
<T_amount/>
<T_income/>
<T_expense/>

</div>
<div className='chart-dash'>
<Chart1 />
</div>
</> 
    )
}



export default Dashboard