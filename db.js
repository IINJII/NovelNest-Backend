const mongoose = require('mongoose');
const URI = 'mongodb+srv://aiie53:nahipata@cluster0.9cql8yk.mongodb.net/BookStore'

const mongoConnect = () => {
    mongoose.connect(URI);
}

module.exports = mongoConnect;