var Sequelize = require('sequelize');
var sequelize = require('./mysql');

var User = sequelize.define('user', {
name: {
  type: Sequelize.STRING,
},
email: {
  type: Sequelize.STRING,
},
password: {
  type: Sequelize.STRING,
}
});

module.exports = User