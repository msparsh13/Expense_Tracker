const { Router } = require("express");
const  {addincome} = require('./income_operations');
const { delinc } = require("./income_operations");
const { getinc } = require("./income_operations");
const { addexpense } = require("./expense_operations");
const {getoneinc } =  require("./income_operations");
const { delexp } = require("./expense_operations");
const { getexp } = require("./expense_operations");
const { getoneiexp } = require("./expense_operations");
const router = require("express").Router() ;
router.get('/' , (req , res)=>{
   console.log(req.body)
})


//income

router.post('/addinc' , addincome)
router.delete('/delinc/:id' , delinc) 
router.get('/getallinc' , getinc)
router.get('/getoneinc/:id' , getoneinc)


//expenses

router.post('/addexp' , addexpense)
router.delete('/delexp/:id' , delexp) 
router.get('/getallexp' , getexp) 
router.get('/getoneexp/:id' , getoneiexp)




module.exports = router ;