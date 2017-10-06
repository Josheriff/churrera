const mongoose = require('mongoose');
const config = require('../../config.json');

mongoose.Promise = global.Promise;

exports.connect = async function () {
  mongoose.connect(config.mongouri, {
  		useMongoClient: true,
  });
};

exports.disconnect = async function () {
  mongoose.connection.close();
};

