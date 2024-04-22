import React, { useState } from 'react';
import TopBar from '../../components/TopBar/TopBar';
import './write.css';

export default function Write() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes utilizar el valor de 'title' y 'description' como desees, como enviarlos a una API, almacenarlos en una base de datos, etc.
        console.log('Título:', title);
        console.log('Descripción:', description);

        const data = {}
        data["title"] = title
        data["description"] = description
        data["image"] = "default"

        const url = "http://127.0.0.1:3001/blogs"
        fetch (url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json"},
        }).then((r)=>{
            return r.json().then((data) => ({
                status: r.status,
                body: data,
            }))
        
        })

    }

    return (
        <>
            <div className='write'>
                <img
                    className="writeImg"
                    src="https://lasdeliciasdevivir.net/wp-content/uploads/2019/02/Brownies-Red-Velvet-Receta-Las-Delicias-Del-Buen-Vivir.jpg"
                    alt="" />

                <form className='writeForm' onSubmit={handleSubmit}>
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <i className="writeIcon fa-solid fa-plus"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                        <input
                            type="text"
                            placeholder="Title"
                            className="writeInput"
                            autoFocus={true}
                            value={title}
                            onChange={handleTitleChange} />
                    </div>
                    <div className="writeFormGroup">
                        <textarea
                            placeholder="Tell your story..."
                            type="text"
                            className="writeInput writeText"
                            value={description}
                            onChange={handleDescriptionChange}>
                        </textarea>
                    </div>
                    <button className="writeSubmit" type="submit">
                        Publish
                    </button>
                </form>
            </div>
        </>
    )
}
