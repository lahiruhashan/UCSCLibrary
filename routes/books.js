const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../config/database');
const Book = require('../models/book');
const RequestBook = require('../models/requestBook');
const Fine = require('../models/fine');

router.post('/addBook', function (req, res, next) {
        let newBook = new Book({

            name : req.body.bookName,
            author : req.body.author,
            pages : req.body.pages,
            edition : req.body.edition,
            publisher : req.body.publisher,
            year : req.body.year,
            imageUrl : req.body.imageUrl,
            copies: req.body.copies,
            from:req.body.from
        });

        Book.addBook(newBook, (err, book) => {
           if (err){
               res.json({
                   success : false,
                   msg : 'Failed to add the book'
               });
           }else{
               res.json({
                   success : true,
                   msg : 'Book Added'
               })
           }
        });
});

router.post('/getNewBooks', function (req, res, next) {
    const limit = req.body.limit;
   Book.getBooks(limit, (err, books) => {
      if (err){
          throw err;
      }
      if (books){
          res.json({
              success: true,
              books: books
          });
      }else{
          res.json({
              success: false,
              msg: 'No books found'
          });
      }
   });
});

router.get('/:bookName', function (req, res, next) {
    Book.getBookByName(req.params.bookName, (err, book) =>{
       if (err) {
           throw err;
       }
       if (book.length === 0){
           res.json({
               success: false,
               msg: "Book not found"
           });
       }else{
           res.json({
               success: true,
               book: book
           });
       }
    });
});

router.get('/book-details/:id', function (req, res, next) {
    Book.getBookById(req.params.id, (err, book) =>{
        if (err) {
            throw err;
        }
        if (book.length === 0){
            res.json({
                success: false,
                msg: "Book not found"
            });
        }else{
            res.json({
                success: true,
                book: book
            });
        }
    });
});

router.post('/countDown', function (req, res, next) {
    const bookId = req.body.bookId;
    const copies = req.body.copies;
   Book.countDown(bookId, copies, (err, count) => {
       if (err){
           throw err;
       }else{
           if (count){
               res.json({
                   success : true
               });
           }else{
               res.json({
                   success: false
               })
           }
       }
   });
});

router.post('/countUp', function (req, res, next) {
    const bookId = req.body.bookId;
    const copies = req.body.copies;
    Book.countUp(bookId, copies, (err, count) => {
       if (err){
           throw err;
       }else{
           if (count){
               res.json({
                   success : true
               });
           }else{
               res.json({
                   success: false
               })
           }
       }
   });
});

router.post('/requestBook', function (req, res, next) {
    let newRequestBook = new RequestBook({
        name : req.body.name,
        author : req.body.author,
        publisher : req.body.publisher,
        edition : req.body.edition,
        category : req.body.category,
        description : req.body.description,
        requestedDate: req.body.requestedDate,
        requestedUser: req.body.requestedUser
    });

    RequestBook.addRequestBook(newRequestBook, (err, data) => {
        if (err){
            throw err;
        }else{
            if (data){
                res.json({
                    success: true,
                    msg: 'Request sent'
                })
            }
        }
    });

});

router.post('/getAllRequestedBooks', function (req, res, next) {
   RequestBook.getAllRequestedBooks((err, books) => {
      if (err){
          throw err;
      }
      if (!books){
          res.json({
              success : false,
              msg: 'No books found'
          })
      }else{
          res.json({
              success : true,
              books : books
          })
      }
   });
});

router.post('/checkAvailability', function (req, res, next) {
   const bookName = req.body.bookName;
   const author = req.body.author;

   Book.checkAvailability(bookName, author, (err, status) => {
        if (err){
            throw err;
        }
        if (status.length === 0){
            res.json({
                success : false,
                msg: 'Book not found'
            })
        }else{
            res.json({
                success: true,
                msg: 'Book Found'
            })
        }
   });
});

router.post('/updateBookStatus', function (req, res, next) {
   const id = req.body.id;
   RequestBook.updateBookStatus(id, (err, result) => {
      if (err){
          throw err;
      }
      if (!result){
          res.json({
              success: false,
              msg: 'Not Updated'
          });
      }else{
          res.json({
             success: true,
             msg: 'Updated'
          });
      }
   });
});

router.post('/addFine', function (req, res, next) {
   let newFine = new Fine({
     indexNumber : req.body.indexNumber,
     bookName : req.body.bookName,
     amount: req.body.amount,
     datePaid : Date.now()
   });
   Fine.addFine(newFine, (err, result) => {
      if (err){
          throw err;
      }
      if (!result){
          res.json({
              success: false,
              msg: 'Fine add failed'
          });
      }else{
          res.json({
              success: true,
              msg: 'Fine added'
          });
      }
   });
});

router.post('/getFines', function (req, res, next) {
   const filter = req.body.filter;
   const today = req.body.today;

   Fine.getFines(filter, today, (err, fineData) => {
       if (err){
           throw  err;
       }
       if (!fineData){
           res.json({
               success : false,
               msg: 'Fine Fetch Failed'
           });
       }else{
           res.json({
               success: true,
               fines: fineData
           });
       }
   });

});

router.post('/getBooksFilter', function (req, res, next) {
   const filter = req.body.filter;
   const today = req.body.today;

   Book.getBooksFilter(filter, today, (err, bookData) => {
       if (err){
           throw  err;
       }
       if (!bookData){
           res.json({
               success : false,
               msg: 'Fine Fetch Failed'
           });
       }else{
           res.json({
               success: true,
               books: bookData
           });
       }
   });

});

router.post('/getAllBooks', function (req, res, next) {
   Book.getAllBooks((err, books) => {
       if (err){
           throw err;
       }
       if (!books){
           res.json({
               success: false,
               msg: 'No Books Found'
           });
       }else{
           res.json({
               success: true,
               books: books
           });
       }
   });
});

router.post('/updateBook', function (req, res, next) {
    let bookId = req.body.bookId;
    let newBook = new Book({
        name : req.body.bookName,
        author : req.body.author,
        pages : req.body.pages,
        edition : req.body.edition,
        publisher : req.body.publisher,
        year : req.body.year,
        imageUrl : req.body.imageUrl,
        copies: req.body.copies,
        from:req.body.from
    });

    Book.updateBook(bookId, newBook, (err, status) => {
        if (err){
            throw err;
        }
        if (!status){
            res.json({
                success: false,
                msg: 'failed to update'
            });
        }else{
            res.json({
                success: true,
                msg: 'successfully updated'
            })
        }
    });
});

router.post('/deleteBook', function (req, res, next) {
   const id = req.body.id;
   Book.deleteBook(id, (err, status) => {
      if (err){
          throw err;
      }
      if (!status){
          res.json({
              success: false,
              msg: 'Failed to delete'
          });
      }else{
          res.json({
              success: true,
              msg: 'Deleted successfully'
          })
      }
   });
});

module.exports = router;