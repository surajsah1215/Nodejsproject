// const Sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = require('../util/database');

const sequelize = new Sequelize('node-complete','root','123456',{
  dialect : 'mysql',
  host : 'localhost'
});


const admin = sequelize.define('admin',{
  id:{
    type : DataTypes.INTEGER,
    autoIncrement : true,
    allownull : false,
    primaryKey: true
  },
  Product_name : DataTypes.STRING,
  category : DataTypes.STRING,
  sellingPrice : DataTypes.INTEGER

});

module.exports = sequelize;
module.exports = admin;