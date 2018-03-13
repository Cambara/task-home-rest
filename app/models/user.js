var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: [ true, 'Kindly enter the name of the user']
  },
  phone: {
    type: String,
    unique: true,
    required: [ true, 'Kindly enter the phone number'],
    min: [10, 'More than 10'],
    max: [15, 'Less than 15']
  },
  email: {
    type: String,
    unique: true,
    required: [ true, 'Kindly enter the e-mail']
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = () => {
  return UserSchema;
}