const express = require('express');
const app = express();
const student = require('./student/getdetails');
const sequelize=require('./db/dbconfig');
const Student=require('./modals/student')
sequelize.sync(
    //{alter:true}
).then(()=>{
    console.log('db connected')
}).catch(err=>{
    console.log('error: ',err)
});

app.use(express.static(__dirname+'/public'))
app.use('/student',student);
app.use('/',(req,res)=>{
    res.send('App Server get request')
}
)
port = 3001;

app.listen(port,()=>
{
console.log(`Server is listening at port ${port}`);
});