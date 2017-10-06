const express = require('express'),
      bodyParser = require('body-parser'),
      Routes = require('./components/router'),
      config = require('./config.json');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//MIDDLEWARE
// Only Accept x-www-form-urlencoded because of the standards

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 

const port = config.port || 3000

console.log('Lets begin to cook Churros on port ',port)

Routes(app);
