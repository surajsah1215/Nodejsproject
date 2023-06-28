// const Sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');

// const sequelize = require('../util/database');

const sequelize = new Sequelize('node-complete','root','123456',{
  dialect : 'mysql',
  host : 'localhost'
});


const Expense = sequelize.define('expenses',{
  id:{
    type : DataTypes.INTEGER,
    autoIncrement : true,
    allownull : false,
    primaryKey: true
  },
  experiment : DataTypes.STRING,
 description : DataTypes.STRING,
  category:DataTypes.STRING

});

module.exports = sequelize;
module.exports = Expense;