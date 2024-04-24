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

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Aquí puedes utilizar el valor de 'title' y 'description' como desees, como enviarlos a una API, almacenarlos en una base de datos, etc.
        console.log('Título:', title);
        console.log('Descripción:', description);
        const image64 = 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

        const blog = {title, content: description, image64};

        console.log(blog);

        try{
            const response = await fetch('http://127.0.0.1:3001/blogs', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            })
            const response_JSON = await response.json()
            if (response_JSON.success){
                console.log('post created')
                window.location.href = '/home'; // Redirigir a '/home'
                return
            }
        } catch (error){
            console.error('error in posted', error)
            alert('POSTED NOT SUCCESFULLY')
        }

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
                            placeholder="Content"
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


