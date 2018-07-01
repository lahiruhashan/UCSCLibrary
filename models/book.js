const mongoose = require('mongoose');
const config = require('../config/database');

const BookSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages : {
        type: Number,
        required: true
    },
    edition: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    copies:{
        type: Number,
        required: true
    },
    from:{
        type: Number,
        required: true
    }
});
const Book = module.exports = mongoose.model('Book', BookSchema);

module.exports.getBooks = function (limit, callback) {
  Book.find().sort({from:-1}).limit(limit).exec(callback);
};

module.exports.getBookById = function (id, callback) {
    Book.findById(id, callback);
};

module.exports.getBookByName = function (name, callback) {
    const query = {name: new RegExp('.*'+name+'.*', "i")};
    Book.find(query, callback);
};

module.exports.addBook = function (newBook, callback) {
    newBook.save(callback);
};

module.exports.countDown = function (bookId, value, callback) {
    const query = {_id: Object(bookId)};
    Book.update(query, {$set: {copies : (value - 1)}}, callback);
};

module.exports.countUp = function (bookId, value, callback) {
    const query = {_id: Object(bookId)};
    Book.update(query, {$set: {copies : (value + 1)}}, callback);
};

module.exports.checkAvailability = function (bookName, author, callback) {
    const query = {name : bookName, author: author};
    Book.find(query, callback);
};