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

module.exports.updateBook = function (bookId, newBook, callback) {
    const query = {_id :  Object(bookId)};
    Book.update(query,{
        name: newBook.name,
        author: newBook.author,
        pages: newBook.pages,
        edition: newBook.edition,
        publisher: newBook.publisher,
        year: newBook.year,
        imageUrl: newBook.imageUrl,
        copies: newBook.copies
    }, callback);
};

module.exports.deleteBook = function (bookId, callback) {
    const query = {_id : Object(bookId)};
    Book.remove(query,callback);
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

module.exports.getAllBooks = function (callback) {
  Book.find(callback);
};

module.exports.getBooksFilter =  function(filter, today, callback){
    if (filter === null){
        Book.find(callback);
    }else{
        Book.find({from: {$gte : filter, $lte: today}}, callback);
    }
};