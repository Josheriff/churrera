const mongoose = require('mongoose');
const config = require('./user.config.json');

const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: { type: String, trim: true, required: true },
  password: { type: String, required: true},
  booleanExample: { type: Boolean, default: false },
  objectIdExample: { type: Schema.Types.ObjectId, ref: 'RefOne' }, // add property in toBePopulated
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

exports.getOne = async function (id){
  try{
    const user = await UserModel.find({_id:id});

    return user;
  } catch(error) return Promise.reject(error);

}


// exports.model = userModel; to try if works
