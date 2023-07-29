const mongoose = require('mongoose') ;

const E_schema =  new mongoose.Schema({
    title : {
       type : String ,
       required : true ,
       
    },
    amount : {
       type : Number ,
       required : true ,
    },
   
    Category : {
       type : String ,
       required : true ,
   
    } ,
    date: {
       type : Date ,
    },
    note : {
       type : String ,
   
    }
    
   
   },
   {timestamps :true })
 
 module.exports = new mongoose.model('expenses' , E_schema)