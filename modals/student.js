const sequelize=require('../db/dbconfig');
const { DataTypes } = require("sequelize");

const Student=sequelize.define('student',{
    student_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        allowIncrement:true,
        primaryKey:true
    },
    student_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=Student