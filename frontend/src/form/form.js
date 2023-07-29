


import React, { useState } from "react";
import { useGlobalContext } from "../context/globalcontext";
import { GlobalProvider } from "../context/globalcontext";

import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import "./form.css"

 function IForm ()  {





    
    const {addIncome, getIncomes, error, setError} = useGlobalContext()
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
        e.preventDefault()
        addIncome(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            Category: '',
            note: '',
        })
        
    }

    return (
        <form onSubmit={handleSubmit}>
           
            <div className="inputs">
                <input 
                    type="text" 
                    value={title}
                    name={'title'} 
                    placeholder="Title"
                    onChange={handleInput('title')}
                />
            </div>


            <div className="inputs">
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

          
            <div className="selects inputs">
                <select required value={Category} name="category" id="category" onChange={handleInput('Category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input">
                <textarea name="description" value={note} placeholder='Add A Reference' defaultValue={" "} cols="30" rows="4" onChange={handleInput('note')}></textarea>
            </div>


            <input type = "submit" value = "Submit"  className="submitbut"/>
        </form>
    )
}

    
       
   

export default IForm