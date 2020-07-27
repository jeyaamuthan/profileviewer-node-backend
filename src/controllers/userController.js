const controller = {}
var User = require('../model/User');

var sequelize = require('../model/mysql');


// para migrar por si no tiene tablas
sequelize.sync();

controller.createUser = async ({ name, password,email }) => {
    return await User.create({ name, password,email });
  };
  
  controller.getAllUsers = async () => {
    return await User.findAll();
  };
  
  controller.getUser = async obj => {
    return await User.findOne({
      where: obj,
    });
  };
  module.exports = controller;