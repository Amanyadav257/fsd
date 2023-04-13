const express = require('express');
const app = express();
port = 3002;
hostname='127.0.0.1';
app.get('/',(request,response)=>{
response.send('Hello World');
});
app.get('/api',(request,response)=>{
response.send('Hello World');
});

app.listen(port,hostname,()=>
{
console.log(`Server is listening ar port ${port}`);
});