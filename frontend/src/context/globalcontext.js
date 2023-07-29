import React, { useContext, useEffect, useState } from "react"
import axios from 'axios'




const BASE_URL = `http://localhost:3001/r/`;
console.log(process.env.REACT_APP_PORT)

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)
  
    
    //calculate incomes
   const getoneIncome = async(id) =>{
    const res = await axios.get(`${BASE_URL}getoneinc/${id}`).catch((err)=>{
        setError(err)
        console.log(err) ;
    })
    setIncomes(res.data)
    console.log(res.data)
   }

    const getIncomes = async () => {
       
        const res = await axios.get(`${BASE_URL}getallinc`).catch((err)=>{
            setError(err)
            console.log(err) ;
        })
        setIncomes(res.data)
        console.log(res.data)
    }

    const addIncome = async (income) => {
        const res = await axios.post(`${BASE_URL}addinc`, income)
            .catch((err) =>{
                setError(err)
                console.log(err)
            })
         getIncomes()
    }
   
    const deleteIncome = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delinc/${id}`).catch((err)=>{
            setError(err)
        })
        getIncomes()
        
    }

    
    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    

     
       

    //calculate incomes
    

    const getExpenses = async () => {
        const res = await axios.get(`${BASE_URL}getallexp`)
    
        setExpenses(res.data)
        console.log(res.data)
    }
    const addExpense = async (expens) => {
        
        const res= await axios.post(`${BASE_URL}addexp`, expens)
        .catch((err) =>{
            setError(err)
            console.log(err)
        })
         getExpenses()
         
    }

    const deleteExpense = async (id) => {
        const res  = await axios.delete(`${BASE_URL}delexp/${id}`)
        getExpenses()
    }

    const totalExpense = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

   

    

    return (
        <GlobalContext.Provider value={{
            getoneIncome ,
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpense,
            totalBalance,
          
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}