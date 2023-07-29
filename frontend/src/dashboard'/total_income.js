import React from "react";
import { useGlobalContext } from "../context/globalcontext";
import './styles.css'

function T_income(){
const {totalIncome}= useGlobalContext()
    return(

      <div style={mystyle}>
        <i class="fa-solid fa-indian-rupee-sign"></i>
        <div>
        <p>Total Income</p>
        <p>{totalIncome()}</p>
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
  margin : "20px"
}

export default T_income



