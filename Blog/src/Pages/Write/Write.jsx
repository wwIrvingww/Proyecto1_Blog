import React, { useState, Suspense, lazy } from 'react'
import './write.css'
import useLogin from '../../Hooks/useLogin'
import NotAdmin from '../Settings/NotAdmin'

const Skeleton = lazy(() => import('./Skeleton'))

export default function Write () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editedImage64, setEditedImage64] = useState('')

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleImage64Change = (event) => {
    setEditedImage64(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Título:', title)
    console.log('Descripción:', description)

    const blog = { title, content: description, image64: editedImage64 }

    console.log(blog)

    try {
      const response = await fetch('http://127.0.0.1:3001/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog)
      })
      const response_JSON = await response.json()
      if (response_JSON.success) {
        console.log('post created')
        window.location.href = '/home' // Redirigir a '/home'
      }
    } catch (error) {
      console.error('error in posted', error)
      alert('POSTED NOT SUCCESFULLY')
    }
  }

  const { isAdmin } = useLogin()

  if (!isAdmin) {
    return (<NotAdmin />)
  }

  return (
        <>
            <div className='write'>
                <Suspense fallback={<Skeleton />}>
                    <form className='writeForm' onSubmit={handleSubmit}>
                        <div className="writeFormGroup">
                            <label htmlFor="fileInput">
                                <i className="writeIcon fa-solid fa-plus"></i>
                            </label>
                            <input type="file" id="fileInput" style={{ display: 'none' }} />
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
                        <div className="writeFormGroup">
                            <textarea
                                placeholder='URL de la imagen'
                                value={editedImage64}
                                type="text"
                                style={{ width: '100%', height: '5vh' }}
                                onChange={(e) => setEditedImage64(e.target.value)}
                                className="writeText">
                            </textarea>
                        </div>
                        <button className="writeSubmit" type="submit">
                            Publish
                        </button>
                    </form>
                </Suspense>
            </div>
        </>
  )
}
