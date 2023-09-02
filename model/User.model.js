const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   name:String,
   email:String,
   password:String,
   phone:Number
});

module.exports = mongoose.model('users', userSchema);