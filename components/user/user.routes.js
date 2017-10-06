const express = require('express');
const UserController = require('./user.controller.js');

module.exports.get = async function(req,res){
	try {
		const result = await UserController.getAll();  
  	res.status(200).json(result);
  } catch(error) {return Promise.reject(error); }
};

module.exports.getOne = async function(req,res){
  try{
		const result = await UserController.getOne(req.params);
		res.status(200).json(result);
	}	catch(error) {return Promise.reject(error); }
};

module.exports.post = async function(req,res){
	try{
  const result = await UserController.add(req.body)
  res.status(200).json(result);
  } catch(error) {return Promise.reject(error); }
  
};