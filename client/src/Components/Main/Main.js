import React, { useState, useEffect } from "react";
import BookCards from "../Cards/BookCards";
import axios from "axios";
import Form from "../Form/Form";

export default function Main() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  // get books READ

  async function getBooks() {
    let API = "https://can-of-books-wui7.onrender.com/books";
    const res = await axios.get(API);
    console.log(res.data);
    setBooks(res.data);
  }

  // create Books
  // newBooks is our 'formData'

  const handleAddBooks = async (newBookFormData) => {
    const res = await axios.post(
      "https://can-of-books-wui7.onrender.com/books",
      newBookFormData
    );
    setBooks([...books, res.data]);
  };

  // delete books
  const handleDelete = async (id) => {
    console.log("clicked");
    const res = await axios.delete(
      `https://can-of-books-wui7.onrender.com/books/${id}`
    );
    console.log(res);
    getBooks();
  };

  // update books
  const handleUpdateBooks = async (book) => {
    await axios.put(
      `https://can-of-books-wui7.onrender.com/books/${book._id}`,
      book
    );

    getBooks();
  };

  return (
    <div>
      <Form onSubmitFunc={handleAddBooks} />
      <BookCards
        books={books}
        handleDelete={handleDelete}
        handleUpdateBooks={handleUpdateBooks}
      />
    </div>
  );
}
