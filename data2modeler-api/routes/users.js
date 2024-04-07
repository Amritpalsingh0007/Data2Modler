var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const usersModel = require("../models/users.model");

/* GET all users . */
router.get('/verifyusername', async function(req, res, next) {
  let username = req.params.username; 
  let existingUser = await usersModel.findOne({UserName: username}).exec();
  console.log(existingUser);
  if(existingUser){
    res.send({status: 200, taken: true, message: 'user already exists'});
  }
  else{
    res.send({status: 500, taken: false, message: 'user not found'});
  }
});

//login verification
router.post('/login', async function(req, res, next) {
  let username = req.body.username; 
  let password = req.body.password;
  console.log("username: " + username+" \npassword: " + password);
  let existingUser = await usersModel.findOne({UserName: username, Password: password}).exec();
  console.log(existingUser);
  if(existingUser){
    res.send({status: 200, verify: true, message: 'user already exists'});
  }
  else{
    res.send({status: 500, verify: false, message: 'user not found'});
  }
});

// add new user
router.post('/add', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const name = req.body.name;

  let userObj = new usersModel({
    UserName: username,
    Password: password,
    Email: email,
    Name: name,
  });
  
  userObj.save().then(()=>{
    res.send({status: 200, message: 'user added successfully', user: userObj});
  }).catch(err =>{
      res.send({status: 500, message: 'unable to add user'+err.message});
  });
});

//Update user details
router.put('/update', function(req, res, next) {
  res.send('respond with a resource');
});

//delete user
router.delete('/delete', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
