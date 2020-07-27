const router = require("express").Router();
const express = require("express");
let user = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/key");
const usercontroller = require('../controllers/userController')

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body.name);
  if (!email || !password || !name) {
    return res.status(422).json({ error: "Please fill the all fields" });
  }
  usercontroller
    .getUser({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exist with that email" });
      }
      bcrypt.hash(password, 12).then((hashedPassword) => {
        usercontroller.createUser({email,password: hashedPassword,name}).then((user) => {
          res.json({
            message: "Successfully Saved",
          });
          // .catch(err => {
          //   console.log(err);
          // });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Please provide the email and password" });
  }
  usercontroller.getUser({ email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "invalid email" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          // res.json({message:"Succesfully Sgn In"})
          const token = jwt.sign({ id: savedUser.id }, JWT_SECRET);
          const { id, name, email } = savedUser;
          res.json({ token, user: { id, name, email } });
        } else {
          return res.status(422).json({ error: "invalid username password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
module.exports = router;