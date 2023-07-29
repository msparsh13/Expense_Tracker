import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useGlobalContext } from "../context/globalcontext";
import { types } from "util";
import Income from "./income";






function Form(){
const {addIncome , getIncomes , incomes} = useGlobalContext() ;
   
    const [state , setstate] = useState({
        title  :'' ,
        date :  '' ,
        amount : '' , 
        Category : '' ,
        note : '' ,
    })
    

  const { title, amount, date, Category, note } = state;


    const handleInput = name => e => {
        console.log(state) 
        setstate({...state, [name]: e.target.value})
      
    }
    const handlesubmit = (e) =>{
      
        addIncome(setstate) ;


        setstate({
            title: '',
            amount: '',
            date: '',
            category: '',
            note: '',
        })
        e.preventDefault() ;
        console.log("done") ;
    }
     
  


    return(
        <form onSubmit={handlesubmit}>yaha pe error hai
          
            <input type="text" value={title}  placeholder="Title" onChange={handleInput('title')} />
            
            <input type="number" value={amount}   placeholder="amount" onChange={handleInput('amount')} />


            <input type="date"
                    id='date'
                   
                    selected={date}
                     onChange={(date)=>{
                setstate({...state , date : date}) 
            }} />



            <select name="category" value={Category}
            onChange={handleInput('category')}>
            <option value="" disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
            </select>
            <input type="text" defaultValue={" "} value={note} onChange={handleInput(note)}></input>
            <input type="submit" />
    
        </form>
    )
}

export default Form