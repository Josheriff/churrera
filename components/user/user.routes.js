const express = require('express');
const router = express.Router();
const UserController = require('./user.controller.js');

router.get('/',async function(req,res){
	console.log(req.params.user,'<<<<< REQ PARAM BABY');
	const result = await UserController.getAll();
	res.status(200).json(result);
})

router.post('/',async function(req,res){
	console.log('IN THE POST!!!')
	const result = await UserController.add(req.body);
	res.status(200).json(result);
})

module.exports = router;