import react, { useState } from "react"
import {styled } from 'styled-components'
import { menuItems } from "./items"
import './details.css'

  function Detials(active , setActive){

   
    

    return(
        <nav>
        <div className="user-det">
        <div className="user">
        <h2>Name</h2>
        <p>Money</p>
         
        </div>


        </div>
        <ul className = "menu-items">
          {menuItems.map((item)=>{
            return( <li key={item.id} onClick = {()=>{setActive(item.id) ; console.log(item.id)}}
            className={active === item.id ? 'active': ''}
            >
                  
                {item.icon}

                <span>{item.title}</span>
            </li>
                
                )
          })}

        </ul>
        <div className="bottom-nav">

        <li>
            signout icon
        </li>
        </div>
        </nav>
    )
}



export default Detials ;