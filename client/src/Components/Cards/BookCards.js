import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './MovieCard.css';
import { ReactComponent as Icon } from '../../assets/books_svg.svg'; // add asset image
import Form from '..Form/Form';

export default function BookCards({books, handleDelete, handleUpdateBooks}) {

//use to update movies being displayed   
return (
    <div className='gallery-main-flex'>
        {books.map((movie, index) => {
            return (
                <div key={movie._id} className='card--container--glass'>
                    <p className='txt-500-regular button--delete' onClick={() => handleDelete(books._id, books.name)}>X</p>
                    <h3 className='card--header'>{books.name}</h3>
                    <img src={books.img_url}/>
                    <p className='txt-500-regular'> 
                    </Icon>{books.author}, {books.year}</p>
                    </div>
                    <Form books={books} onSubmit={handleUpdateBooks}/>
                    </div>
            )
        })}
    </div>
    <div>BookCards</div>
)
}
