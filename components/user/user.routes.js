const express = require('express');
const router = express.Router();
const UserController = require('./user.controller.js');

router.get('/',async function(req,res){
	console.log('ESTAMOS DENTRO BABY');
	const result = await UserController.getAll();
	res.status(200).json(result);
})

module.exports = router;