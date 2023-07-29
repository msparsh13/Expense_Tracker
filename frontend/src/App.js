import React from "react";
import Detials from "./details";
import Expenses from "./expenses/expenses";
import Income from "./income/income";
import { useState } from "react";
import { GlobalContext, GlobalProvider, useGlobalContext } from "./context/globalcontext";
import Header from "./header/header";
import Footer from "./footer/footer";
import T_income from "./dashboard'/total_income";
import Dashboard from "./dashboard'/dashboard";
import './Appstyle.css'
import IForm from "./form/form";
import Errorbound from "./error/error";
import Chart1 from "./chart/chart1";
import Transactions from "./transactions/transactions";
import { useEffect } from "react";


function App() {

  
  
 
const [active , setactive ] = useState(1)



  const displayData = ()=>{
    switch(active){
      case 1 :
        return <Dashboard/>
        case 2:
          return<Income/>
        case 3:
          return <Expenses/>
        case 4:
          return <Transactions />
          default:
            return <Dashboard/>
    }
  }
     

  return (
    
 
<div  className="main">

 <Errorbound>
<Header active={active} setactive={setactive}/>
{displayData()}
 
<Footer/>
  </Errorbound>

  </div>  
  
  
  );
}
export default App;