import React, { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "./context/globalcontext";


export default function Expand  ({
    id , 
    title , 
    amount , 
    date , 
    Category , 
    note , 
    deleteItem , 
    type}) {
return(
    <>

   <p>{title}</p>
   <p>{amount}</p>
   <p>{date}</p>
   <p>{Category}</p>
   <p>{note}</p>
 
    </>
)


    }