import React from "react";
import { useGlobalContext } from "../context/globalcontext";
import './styles.css'

function T_amount(){
const {totalBalance}= useGlobalContext()
    return(

      <div style={mystyle}>
       <i class="fa fa-piggy-bank"></i>
       <div>
        <p>Total Balance</p>
        <p>{totalBalance()}</p>
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

export default T_amount



