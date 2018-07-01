const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    indexNumber: {
        type: Number,
    },
    email: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    reservedBooks: {
        type: Array,
        default: []
    },
    pastBooks: {
        type : Array,
        default: []
    },
    type:{
        type: String,
        default: 'member'
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};

module.exports.getUserByEmail = function (email, callback) {
    const query = {email : email};
    User.findOne(query, callback);
};

module.exports.getUserByIndex = function (index, callback) {
    const query = {indexNumber : index};
    User.findOne(query, callback);
};

module.exports.getAllUsers = function (callback) {
    User.find({type : 'member'},'indexNumber reservedBooks', callback);
};

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err){
                throw err;
            }
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err){
            throw err;
        }
        callback(null, isMatch);
    });
};

module.exports.burrowBook = function (bookId, email, callback) {
  const query = { email : email};
  let detail = {
      bookId: bookId,
      date: Date.now()
  };
  User.update(query, {$addToSet: {reservedBooks: detail}}, callback)
};

module.exports.getReserved = function (email, callback) {
  const query = {email: email};
  User.findOne(query, {reservedBooks : 1}, callback);
};

module.exports.getRead = function (email, callback) {
  const query = {email: email};
  User.findOne(query, {pastBooks : 1}, callback);
};

module.exports.returnBook = function (bookId, indexNumber, reservedDate, callback) {
    let bookDetail = {
        bookId: bookId,
        reservedDate: reservedDate,
        returnedDate: Date.now()
    };
    const query = {indexNumber : indexNumber};
    User.update(query, {$pull: { reservedBooks : {bookId : bookId}}, $addToSet: {pastBooks: bookDetail}}, callback);
};