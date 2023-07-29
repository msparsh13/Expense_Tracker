const express = require("express") ;
const cors = require("cors") ;
const fs = require("fs") ;
const {db} = require('./db')
const app = express() ;
app.use(cors()) ;
app.use(express.json()) ;
const path = require("path")
const filepath = path.join(__dirname , "./transactions.js")
require("dotenv").config()
fs.readFileSync( filepath).map((router)=>app.use('/r/' , require("./transactions"))) ;
app.listen(process.env.PORT, (req  , res)=>{
    console.log("one with server") ;
})
 app.get("/" , (req , res)=>{
   res.send("this is working properly");
 })

db() ;






