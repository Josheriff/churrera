// const express = require('express'); if you want to serve static
const user = require('./user/user.routes.js');

console.log('INSIDE THE ROUTER');

const routes = function (app) {
	app.use('/user',user);
}