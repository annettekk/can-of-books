import React, {useState, useEffect} from 'react';
import BookCards from '../Cards/BookCards';
import axios from 'axios';
import Form from '../Form/Form';

export default function Main() {
    const [books, setBooks] = ([])
    useEffect(() => {
        getBooks()
    }, [])

    // get books

    async function getBooks() {
        let API = 'http:localhost.2000/books'
        const res =await axios.get(API);
        console.log(res.data)
        setBooks(res.data)
    }

    // delete books
    const handleDelete = async(id) => {
        console.log('clicked')
        const res = await axios.delete(`http:localhost.2000/books/${id}`)
        console.log(res)
        getBooks()
    }

    // create Books
    // newBooks is our 'formData'

    const handleAddBooks = async(books) => {
        const API = 'http://localhost:2000/books'
        const res = await axios.post(API,newBook)
        // add new books
        console.log(res.data)
        setBooks([...books, res.data])
    }

    // update books
    const handleUpdateBooks = async (books) => {
        await axios.put(`http:/localhost:2000/books${books._id}`, books)
        // setBooks([...books])
        getBooks();
    }

  return (
    <div>
        <Form onSubmit={handleAddBooks} />
        <BookCards books={books} handleDelete={handleDelete} handleUpdateBooks={handleUpdateBooks}/>
    </div>
  )
}
