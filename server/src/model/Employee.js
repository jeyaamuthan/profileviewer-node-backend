//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./mysql');


var Employee = sequelize.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  location: Sequelize.STRING,
  age: Sequelize.INTEGER,
});
module.exports = Employee