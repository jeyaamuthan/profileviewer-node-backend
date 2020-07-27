const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/key');
//const mongoose = require('mongoose');
let user = require("./../model/User");
//const users = mongoose.model("user");
const usercontroller = require('../controllers/userController')
module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if(!authorization){
        return res.status(401).json({error:"you must logged in"})
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, JWT_SECRET,(err, payload)=>{
        if(err){
            return res.status(401).json({ error: "you must logged in" })
        }
        const { id } = payload
        usercontroller.getUser(id).then(userData=>{
            req.user = userData
            next()
        })
    })
}