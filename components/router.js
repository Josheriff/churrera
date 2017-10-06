// const express = require('express'); if you want to serve static
const user = require('./user/user.routes');

const routes = function (app) {

	app.use('/users/:user', user)
	app.use('/users',user);

	app.use('/',function(req,res){ // '/' must be at the end for express regexp
		res.send("Base Url Working!");
	});
	
	
}

module.exports = routes;