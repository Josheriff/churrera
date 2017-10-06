const mongoose = require('mongoose');
const config = require('./user.config.json');

const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: { type: String, trim: true, required: true },
  password: { type: String, required: true},
  email: { type: String },
}, { timestamps: true });

const userModel = mongoose.model('user', UserSchema);


// Curate what we send when transform to JSON

UserSchema.set('toJSON', {
  transform(doc, ret) {
    const data = ret;
    delete data.__v; 
    delete data._id; 
    delete data.password
    if (!ret.deleted) {
      delete data.deleted;
      delete data.deletedAt;
    }
    return data;
  },
});

exports.add = async function (userdata){
  try{
    const user = await new userModel(userdata);

    await user.save();

    return {message: 'success', data: user};
  }catch(error) {return Promise.reject(error); }
}

exports.getAll = async function (){
    try {

      const user = await userModel.find({});

      console.log('all the users, not paginated:', user);
      

      return {message: 'success', data: user};

    }catch(error) {return Promise.reject(error); }
    
};

exports.getOne = async function (id){
  try{

    const user = await UserModel.find({_id:id});

    return user;  

  } catch(error) {return Promise.reject(error); }

}




// exports.model = userModel; to try if works
