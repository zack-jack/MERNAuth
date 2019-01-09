const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = model('User', userSchema);

module.exports = User;
