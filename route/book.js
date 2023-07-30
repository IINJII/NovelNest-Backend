const express = require('express');
const router = express.Router();
const Book = require('../model/Books');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'niti$hisagoodboy';



// 1.   Add books
router.post('/addBook', async (req, res) => {
    let book = new Book({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        book_name: req.body.book_name,
        author: req.body.author,
        format: req.body.format,
        availability: req.body.availability,
        rating: req.body.rating,
        price: req.body.price
    })
    await book.save();
    // let record = await Book.findOneAndUpdate({ name: req.body.name}, { $addToSet: { book: req.body.book_name,  author: req.body.author }})

    res.status(200).json({ book });
})


// 2. Fetch all books
router.post('/fetchAllBooks', async (req, res) => {
    let book = await Book.find({name: req.body.name});

    res.status(200).json({book})
})


// 3. Delete a book
router.delete('/deleteBook', async (req, res) => {
    let book = await Book.findOneAndDelete({book_name: req.body.book_name});
    res.status(200).json({ book });
})



// 4. Get all book regardless of user
router.post('/getAllBooks', async (req, res) => {
    let books = await Book.find({type: 'book'})

    res.status(200).json({ books });
})




module.exports = router