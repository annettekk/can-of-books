import React, {useState} from 'react';
import './Form.css';
import axios from 'axios';

export default function Form({onSubmit, books}) {
    const [formData, setFormData] = useState(books ?? {
        name: '',
        img_url: '',
        author: '',
        year: '',

    }) 
const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
    console.log(formData)
}

const submit = event => {
    event.preventDefault()
    onSubmit(formData)
}

return (
    <div>
        <form onSubmit={submit} className='form--container'>
            <input name="name" placeholder='book title' onChange={handleChange} value={formData.name}></input>
            <input name='img_url' placeholder='img url' onChange={handleChange} value={formData.img_url}></input>
            <input name='author' placeholder='author' onChange={handleChange} value={formData.author}></input>
            <input name='year' placeholder='year' onChange={handleChange} value={formData.year}></input>
            <button type='submit'>{books ? 'Update' : 'Add Book'}</button>
        </form>
    </div>
)
}
