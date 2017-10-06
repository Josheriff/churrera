const express = require('express');
const router = express.Router();
const UserController = require('./user.controller.js');

router.get('/',function(req,res,next){
	UserController.getOne(req.user);
})// o llamar movidas

module.exports = router;