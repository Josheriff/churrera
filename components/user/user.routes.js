const express = require('express');
const UserController = require('./user.controller.js');

module.exports.get = function(req,res){
	
  UserController.getAll().then(function(result){
    res.status(200).json(result);
  });
  // on error: return Promise.reject(error);
};

module.exports.getOne = function(req,res){

	UserController.getOne(req.params).then(function(result){
		res.status(200).json(result);
  });
	// on error: return Promise.reject(error); }
};

module.exports.post = function(req,res){
	
  UserController.add(req.body).then(function(){
    res.status(200).json(result);
  });
  // on error: return Promise.reject(error); }
  
};