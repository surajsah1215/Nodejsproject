// const Sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = require('../util/database');

const sequelize = new Sequelize('node-complete','root','123456',{
  dialect : 'mysql',
  host : 'localhost'
});


const User = sequelize.define('user',{
  id:{
    type : DataTypes.INTEGER,
    autoIncrement : true,
    allownull : false,
    primaryKey: true
  },
  name : DataTypes.STRING,
  email : {
    type: DataTypes.STRING,
    unique:true
  },
  phonenumber:{
    type:DataTypes.INTEGER,
    unique:true,
  }

});

module.exports = sequelize;
module.exports = User;