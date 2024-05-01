import React, { useState, Suspense, lazy } from 'react'
import './write.css'
import useLogin from '../../Hooks/useLogin'
import NotAdmin from '../Settings/NotAdmin'

const Skeleton = lazy(() => import('./Skeleton'))

export default function Write () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editedImage64, setEditedImage64] = useState('')

  const handleTitleChange = event => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = event => {
    setDescription(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    console.log('Título:', title)
    console.log('Descripción:', description)

    const blog = { title, content: description, image64: editedImage64 }

    console.log(blog)

    try {
      const response = await fetch('https://api-postgres.onrender.com/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog)
      })
      const responseJson = await response.json()
      if (responseJson.success) {
        console.log('post created')
        window.location.href = '/home'
      }
    } catch (error) {
      console.error('error in posted', error)
      alert('POSTED NOT SUCCESFULLY')
    }
  }

  const { isAdmin } = useLogin()

  if (!isAdmin) {
    return <NotAdmin />
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
                style={{ height: '60vh' }}
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
                style={{ width: '80%', height: '5vh' }}
                onChange={e => setEditedImage64(e.target.value)}
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
