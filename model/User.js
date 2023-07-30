const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {type: String, require: true},
  email: {type: String, required: true, unique: true}, // String is shorthand for {type: String}
  password: {type: String, required: true},
  date: { type: Date, default: Date.now },
  contact: {type: String, required: true}
});

const User = mongoose.model('user', userSchema);
module.exports = User;