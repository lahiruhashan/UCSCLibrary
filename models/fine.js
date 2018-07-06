const mongoose = require('mongoose');
const config = require('../config/database');

const FineSchema = mongoose.Schema({
    indexNumber : {
        type: Number,
        required: true
    },
    bookName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    datePaid: {
        type: String,
        required: true
    }
});

const Fine = module.exports = mongoose.model('Fine', FineSchema);

module.exports.addFine = function (newFine, callback) {
  newFine.save(callback);
};

module.exports.getAllFines = function (callback) {
  Fine.find(callback);
};

module.exports.getFines =  function(filter, today, callback){
    if (filter === null){
        Fine.find(callback);
    }else{
        Fine.find({datePaid: {$gte : filter, $lte: today}}, callback);
    }

};
