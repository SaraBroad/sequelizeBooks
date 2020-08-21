const db = require('../models')

const booksController = {
    getAllBooks (req, res) {
        return db.Book.findAll({})
            .then(function (books) {
            //    console.log(books)
               return res.json(books)
            })
            .catch(err => {
                return res.status(500).sendStatus('DATABASE ERROR: ' + err.message)
            })
    },
    addBook(req, res) {
        db.Book.create({
                title: req.body.title,
                author: req.body.author,
                dateFinished: req.body.dateFinished,
                pages: req.body.pages,
                rating: req.body.rating,
                bookType: req.body.bookType
            }).then(function (book) {
                res.json(book)
            })
            .catch(err => {
                res.status(500).sendStatus('DATABASE ERROR: ' + err.message)
            })
    },
    deleteBook(req, res) {
        const bookId = req.params.id
        db.Book.destroy({
                where: {
                    id: bookId
                }
            }).then(function (book) {
                // 
                if (!book) {
                    return res.status(404).json({
                        message: 'book not found'
                    })
                } else {
                    res.status(200).json(book)
                }
            })
            .catch(err => {
                res.status(500).sendStatus('DATABASE ERROR: ' + err.message)
            })
    },
    changeRating(req, res) {
        const bookId = req.params.id
        const newRating = req.body.rating
        db.Book.update({
                rating: newRating
            }, {
                where: {
                    id: bookId
                }
            })
            .then(function (book) {
                res.json(book)
            })
            .catch(err => {
                res.status(500).sendStatus('DATABASE ERROR: ' + err.message)
            })
    },

    getBookById(req, res) {
        const bookId = req.params.id
        db.Book.findOne({
                where: {
                    id: bookId
                }
            }).then(function (book) {
                if (!book) {
                    return res.status(404).json({
                        message: 'book not found'
                    })
                } else {
                    res.status(200).json(book)
                }
            })
            .catch(err => {
                res.status(500).sendStatus('DATABASE ERROR: ' + err.message)
            })
    }
}

module.exports = booksController