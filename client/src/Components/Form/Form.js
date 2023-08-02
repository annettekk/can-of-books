import React, {useState} from 'react';
import './Form.css';

export default function Form({onSubmitFunc, book}) {
    const [formData, setFormData] = useState(book ?? {
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
    onSubmitFunc(formData)
}

return (
    <div>
        <form onSubmit={submit}>
            <input name="name" placeholder='book title' onChange={handleChange} value={formData.name}></input>
            <input name='img_url' placeholder='img url' onChange={handleChange} value={formData.img_url}></input>
            <input name='author' placeholder='author' onChange={handleChange} value={formData.author}></input>
            <input name='year' placeholder='year' onChange={handleChange} value={formData.year}></input>
            <button type='submit'>{book ? 'Update' : 'Add Book'}</button>
        </form>
    </div>
)
}
