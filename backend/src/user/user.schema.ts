import * as mongoose from 'mongoose';

export const CollectionName ='user'
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
},
password: {
    type: String,
    required: true
},
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type:String,
    required: true
  },
  address: {
    type:String,
    required: true
  },
  tel: {
    type:String,
    required: true
  },
   hashReset: {
    hash: String,
    expired: Date,
    resetTime: Date
  },
  status:String,
  userrights :String,
  createuser_date: Date,
  updateuser_date: Date
});
export {UserSchema}