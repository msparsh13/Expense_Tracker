


import React, { useState } from "react";
import { useGlobalContext } from "../context/globalcontext";
import { GlobalProvider } from "../context/globalcontext";
import '../form/form.css'

import ReactDatePicker from "react-datepicker";



 function EForm ()  {





    
    const {addExpense,  error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: "",
        amount: "",
        date: "",
        Category: "",
        note: "",
    })

    const { title, amount, date, Category, note } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = e => {
       
        addExpense(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            Category: '',
            note: '',
        })
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
           
            <div className="input">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Amount'}
                    onChange={handleInput('amount')} 
                />
            </div>
            <ReactDatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />

          
            <div className="selects input">
                <select required value={Category} name="category" id="category" onChange={handleInput('Category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="subscription">subscription</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Food">Food</option>
                    <option value="bill">Bill</option>
                    <option value="medical">Medical</option> 
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input">
            <textarea name="description" value={note} placeholder='Add A Reference' defaultValue={"no note added"} cols="30" rows="4" onChange={handleInput('note')}></textarea>
            </div>


            <input type = "submit" value = "Submit" className="submitbut"/>
        </form>
    )
}

    
       
   

export default EForm