import React from "react";

import "./BookCards.css";

import Form from "../Form/Form";

export default function BookCards({ books, handleDelete, handleUpdateBooks }) {
  //use to update movies being displayed
  return (
    <div>
      {books?.map((book) => {
        return (
          <div key={book._id}>
            <div>
              <p className="para" onClick={() => handleDelete(book._id)}>
                X
              </p>
              <h3>{book.name}</h3>
              <img src={book.img_url} alt="book" />
              <p>
                {book.author}, {book.year}
              </p>
            </div>

            <Form onSubmitFunc={handleUpdateBooks} book={book} />
          </div>
        );
      })}
    </div>
  );
}
