const UserModel = require('./user.model');

async function getOne(userId){
	return UserModel.getOne(userId);
}