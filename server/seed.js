const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)

const Book = require('./models/books')

async function seed() {
    await Book.create(
        {
            name: 'The hitchhikers guide to the galaxy',
            author: 'Adams',
            year: '1979',
            
        }
    )
    await Book.create(
        {
            name: 'A brand new world',
            author: 'Huxley',
            year: '1932',
            
        }
    )

    console.log('Go kitty')
    mongoose.disconnect()
}

seed()