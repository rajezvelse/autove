const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

var User = mongoose.model('User', new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    select: false
  },
  role: {
    type: String,
    enum: ['admin', 'shop_keeper'],
    default: 'shop_keeper',
    required: [true, 'Role is required']
  },
  firstName: {
    type: String,
    required: [true, 'Firstname is required']
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: { validator: validator.isEmail, message: 'Invalid email address' }
  },
  phone: {
    type: String,
  },
  addressLine1: {
    type: String
  },
  addressLine2: {
    type: String
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
}));

// Set custom validators
User.schema.path('username').validate(async (value, respond) => {

  var record = await User.findOne({ username: value });
  return record ? false : true;

}, "Username is already registered");


module.exports = User; 