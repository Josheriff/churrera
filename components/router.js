const user = require('./user/user.routes');

const routes = function (app) {

  app.get('/users/:user', user.getOne);
  app.get('/users',user.get);
  app.post('/users', user.post);

	app.get('/',function(req,res){ // '/' must be at the end for express regexp
		res.send("Base Url Working!");
	});
	
};

module.exports = routes;