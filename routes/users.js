const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        indexNumber: req.body.indexNumber,
        email : req.body.email,
        password : req.body.password,
        type: req.body.type
    });

    User.addUser(newUser, (err, user) => {
        if (err){
            res.json({
                success : false,
                msg : 'Failed to register user'
            });
        }else{
            res.json({
                success : true,
                msg : 'User Registered'
            });
        }
    });
});

//authenticate
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if (err){
            throw err;
        }
        if (!user) {
            return res.json({
                success : false,
                msg : "User not found"
            });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err){
                throw err;
            }
            if (isMatch){
                const token = jwt.sign({data : user}, config.secret, {
                    expiresIn: 604800 //1 week
                });

                res.json({
                    success : true,
                    token : `Bearer ${token}`,
                    user : {
                        id : user._id,
                        firstName : user.firstName,
                        lastName : user.lastName,
                        indexNumber: user.indexNumber,
                        email : user.email,
                        type:  user.type
                    }
                });
            }else{
                return res.json({
                    success : false,
                    msg : 'Wrong password'
                });
            }
        });
    });
});

//profile
router.get('/profile', passport.authenticate('jwt', {session : false}), (req, res, next) => {
    res.json({
        user : req.user
    })
});

//check availability
router.post('/checkAvailability', (req, res, next) => {
    const email = req.body.email;
    const indexNumber = req.body.indexNumber;

    User.getUserByEmail(email, (err, user) => {
        if(err){
            throw err;
        }else{
            if (!user){
                User.getUserByIndex(indexNumber, (err, user) => {
                   if (err){
                       throw err;
                   }else{
                       if (!user){
                           return res.json({
                               success: true,
                               msg: 'No user available'
                           });
                       }else{
                           return res.json({
                               success: false,
                               msg: 'User found'
                           });
                       }
                   }
                });
            }else{
                return res.json({
                    success: false,
                    msg: 'User found'
                });
            }
        }
    });
});

router.post('/checkAdminAvailability', (req, res, next) => {
    const email = req.body.email;

    User.getUserByEmail(email, (err, user) => {
        if(err){
            throw err;
        }else{
            if (!user){
                return res.json({
                    success: true,
                    msg: 'No user available'
                });
            }else{
                return res.json({
                    success: false,
                    msg: 'User found'
                });
            }
        }
    });
});


router.post('/burrowBook', function (req, res, next) {
    const email = req.body.email;
    const bookId = req.body.bookId;

    User.burrowBook(bookId, email, (err, count) => {
       if (err){
           throw err;
       }else{
           if (count){
              res.json({
                  success: true
              });
           }else{
               res.json({
                   success: false
               })
           }
       }
    });
});

router.post('/getReserved', function (req, res, next) {
    const email = req.body.email;
    User.getReserved(email, (err, books) => {
        if (err){
            throw err;
        }else{
            if (!books){
                res.json({
                    success: false,
                    msg: 'No reserved books'
                });
            }else{
                res.json({
                    success: true,
                    books: books
                })
            }
        }
    });
});

router.post('/getRead', function (req, res, next) {
    const email = req.body.email;
    User.getRead(email, (err, books) => {
        if (err){
            throw err;
        }else{
            if (!books){
                res.json({
                    success: false,
                    msg: 'No Read books'
                });
            }else{
                res.json({
                    success: true,
                    books: books
                })
            }
        }
    });
});

router.post('/getAllUsers', function (req, res, next) {
    User.getAllUsers((err, users) => {
        if (err){
            throw err;
        }else{
            if (!users){
                res.json({
                    success: false,
                    msg: 'No Users'
                });
            }else{
                res.json({
                    success: true,
                    users: users
                });
            }
        }
    });
});

router.post('/returnBook', function (req, res, next) {
    const bookId = req.body.bookId;
    const indexNumber = req.body.indexNumber;
    const reservedDate = req.body.reservedDate;

    User.returnBook(bookId, indexNumber, reservedDate, (err, data) => {
        if (err){
            throw err;
        }
        if(data){
            res.json({
                success: true
            })
        }
    })
});

router.post('/updateUser', function (req, res, next) {
    let user = {
        email : req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName
    };

    User.updateUser(user, (err, data) => {
       if (err){
           throw err;
       }
       if (!data){
           res.json({
               success: false
           });
       }else{
           res.json({
               success: true
           })
       }
    });
});

module.exports = router;