const express = require('express');
const studentRouter=express.Router();
var data=[{
    name: "Rajat",
    ID:"123"
},
{
    name:"Aman",
    ID:"124"
},]
studentRouter.post('/get',(request,response)=>{
response.send(data);
});

module.exports=studentRouter