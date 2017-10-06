const UserModel = require('./user.model');

exports.getOne = async function getOne(userId){
	return UserModel.getOne(userId);
}

exports.add = async function add(data){
	return UserModel.add(data);
}

exports.getAll = async function getAll(){
	return await UserModel.getAll();
}
