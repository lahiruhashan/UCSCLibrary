const mongoose = require('mongoose');
const config = require('../config/database');

const RequestBookSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    edition: {
        type: String,
    },
    publisher: {
        type: String,
    },
    category: {
        type: String,
    },
    description: {
        type: String
    },
    requestedDate: {
        type: Number,
        required: true
    },
    requestedUser: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0
    }
});

const RequestBook = module.exports = mongoose.model('RequestBook', RequestBookSchema);

module.exports.addRequestBook = function (newRequestBook, callback) {
    newRequestBook.save(callback);
};

module.exports.getAllRequestedBooks = function (callback) {
    const query = {status : 0};
    RequestBook.find(query,callback)
};

module.exports.updateBookStatus = function (id, callback) {
    const query = {_id: id};
    RequestBook.update(query,{$set : {status : 1}}, callback);
};
