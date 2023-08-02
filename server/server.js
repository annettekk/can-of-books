const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const Book = require('./models/books')
const bp = require('body-parser')

const app = express(); 
app.use(cors())

app.use(bp.json())

mongoose.connect(process.env.DATABASE_URL).then(() => console.log('DB Connected'))


const PORT = process.env.PORT || 8088

app.get('/', (request, response) => {
    response.status(200).json('welcome')
})

app.get('/books', async (request, response)=>{
    try {
    const allBooks = await Book.find(request.query)
    response.status(200).json(allBooks)
} catch (err) {
    console.log(err)
    response.status(404).json(err)
}
})

app.post('/books', async (request, response) => {
    const newBook = await Book.create(request.body)
    response.status(200).json(newBook)
})

app.put('/books/:id', async (request, response) => {
    // console.log(request.params.id);
    try {
        await Book.findByIdAndUpdate(request.params.id, request.body)
        response.status(204).send()
    } catch(err) {
        response.send(err)
    }
})

app.delete('/books/:id' , async (request, response) => {
    console.log(request)
    try {
        const id = request.params.id;
        console.log(id)
        const deletedBook = await Book.findByIdAndDelete(id)
        response.status(200).json(deletedBook)
    } catch (err) {
        response.status(500).json(err)
    }
})

app.listen(PORT, () => console.log(`summoning a server on  PORT: ${PORT}`))