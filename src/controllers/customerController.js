const controller = {}
var Employee = require('../model/Employee');
var sequelize = require('../model/mysql');

// para migrar por si no tiene tablas
sequelize.sync();

// controller.delete = async (req,res) => {

//   // parameter post
//   const { id } = req.body;
//   // delete sequelize
//   const del = await Employee.destroy({
//     where: { id: id }
//   })
//   res.json({success:true, deleted:del, message:"Deleted successful"});

// }

controller.delete = async (req, res) => {
  const id = req.params.id;
  Employee.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a employee with id = ' + id);
  });
};



controller.update = async (req, res) => {
  // parameter id get
  const { id } = req.params;
  // parameter post
  const {name, email, location, age } = req.body;
  // update data
  const data = await Employee.update({
    name: name,
    email:email,
    location:location,
    age:age,
  },{
    where: { id: id}
  })
  .then( function (data){
    return data;
  })
  .catch(error => {
    return error;
  })

  res.json({ success:true, data: data, message: "Updated successful"});

}

controller.get = async (req, res) => {
  const { id } = req.params;
  const data = await Employee.findAll({
    where: { id: id},
    //include: [ Role ]
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  })
  res.json({success:true, data:data});
}

controller.list = async (req,res) => {
  const data = await Employee.findAll({
   // include: [ Role ]
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    return error;
  })
  res.json({ success: true, data:data });
}


controller.create = async (req,res) => {

  // DATA parametros desde post
  const {name, email, location, age } = req.body;
  //console.log("ROle es ==>"+role)
  //create
  const data = await Employee.create({
    name:name,
    email:email,
    location:location,
    age:age,
   // phone:phone,
    // roleId:role
  })
  .then(function(data){
    return data;
  })
  .catch(error=>{
    console.log(error)
    return error;
  })
  // return res
  res.status(200).json({
    success:true,
    message:"Employee Sucessfully Saved...!!!",
    data:data
  })

}
module.exports = controller;