const  mongoose = require('mongoose')

const {Schema} = mongoose

const bookSchema = new Schema(
    {
        name: String,
        author: String,
        year: String,
        
    }
)

const Book = mongoose.model('Book', bookSchema)

module.exports = Book