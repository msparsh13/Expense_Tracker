import React from "react";
import './header.css'
function Header({active , setactive}){
    return(
      <header>
        <div>
        <button className="hover-underline-animation" onClick={()=>{setactive(1)}}>
        Dashboard 
        <i className="fa fa-chart-column"></i>
        </button>

        <button className="hover-underline-animation" onClick={()=>{setactive(4)}}>
        Monthly Budget
        <i className="fa-regular fa-calendar"></i>
        </button>


        <button className="hover-underline-animation"  onClick={()=>{setactive(2)}}>
        Income
        <i className="fa fa-inr"></i>
        </button>

       <button className="hover-underline-animation"  onClick={()=>{setactive(3)}}>
        Expenses
        <i className="fa-solid fa-money-bills"></i>
        </button>
        </div>


      </header>
    );
}
export default Header;