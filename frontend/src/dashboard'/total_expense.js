import React from "react";
import { useGlobalContext } from "../context/globalcontext";
function T_expense(){
 const {totalExpense} = useGlobalContext()
    return(
      <div style={mystyle}>
        <i class="fa-regular fa-dollar-sign"></i>
        <div>
        <p>Total Expense</p><span>{totalExpense()}</span>
        </div>
      </div>

    )
  }


  const mystyle={
    background : "#f5f5f5" ,
    color : "#191D23" ,
    height : "120px" ,
    width :  "400px" ,
    display : "flex" ,
    flexWrap:" wrap",
    alignContent: "center",
    justifyContent: "space-around",
    margin : "20px" ,
  }

export default T_expense



