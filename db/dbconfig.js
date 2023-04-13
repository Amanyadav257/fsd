const { Sequelize } = require('sequelize');

// const database='fsd';
// const username='root';

const host="localhost";
const port="3306";


const sequelize = new Sequelize('fsd', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    logging:true,
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:100000
    }
  });

  const connect=async()=>{
    try{
        await sequelize.authenticate();
    }catch(err)
{
    console.log("Error",err);
}  
  return sequelize;
}

connect();

module.exports=sequelize;