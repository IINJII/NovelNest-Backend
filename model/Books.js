const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  contact: {type: String, required: true},
  author: {type: String, required: true},
  format: {type: String, required: true},
  availability: {type: String, required: true},
  rating: {type: String, required: true},
  date: { type: Date, default: Date.now },
  book_name: {type: String, required:true},
  price: {type: String, required:true},
  type: {type: String, default:'book'}
});


const Book = mongoose.model('book', bookSchema);
module.exports = Book;