var express = require('express');

var userCtrl = require('../controller/userController');
var jwthelper=require('../config/jwtHelper');


var routes=express.Router();

routes.post('/newUser',userCtrl.addUser);
routes.post('/auth',userCtrl.authenticate);
routes.get('/profile',jwthelper.verifytoken,userCtrl.userProfile);
routes.get('/SelectUser/:id',userCtrl.selectedUser);
routes.post('/newJob',userCtrl.postJob);
routes.get('/jobs',userCtrl.getdata);
module.exports = routes;
