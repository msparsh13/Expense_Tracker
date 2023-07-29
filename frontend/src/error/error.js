
import React, { Component } from "react";
import { useState } from "react";

class Errorbound extends React.Component{
    constructor(props){
        super(props)
        this.state={
            error : false 
        }
    }
    static getDerivedStateFromError(error){
        return {error : true}
    }



    render(){
        
    if(this.state.error){
 return<h1>error</h1>
    }
    else{
   return (this.props.children)
    }
    }
}

export default Errorbound ;


