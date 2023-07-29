import React from "react";
import './i_itemstyle.css'

import { useState } from "react";
import Expand from "../expand";



export default function Item  ({
    id , 
    title , 
    amount , 
    date , 
    Category , 
    note , 
    deleteItem  }) {
     
   const [show , setshow] = useState(false) ;

    return(
        <div className="item">
<div className="icon">
   
</div>
<div className="content">
    <h5>{title}</h5>
    <p>{amount}</p>
 

<button className="expand" onClick={()=>{ setshow(!show)}}><i class="fa-solid fa-up-right-and-down-left-from-center"></i></button>
{show && <div className="details">
<p><i class="fa-solid fa-book"></i>{title}</p>
<p><i class="fa-solid fa-indian-rupee-sign"></i>{amount}</p>
<div><i class="fa-solid fa-calendar-days"></i>{date}</div>
<p><i class="fa-solid fa-list"></i>{Category}</p>
<p><i class="fa-regular fa-comment"></i>{note}</p>

<button onClick={()=>{ setshow(!show)}}><i class="fa-solid fa-xmark"></i></button></div>}

<button className="del-but" onClick={()=>deleteItem(id)}><i class="fa-solid fa-trash"></i></button>   
        </div>
     
    </div>

    )
}


