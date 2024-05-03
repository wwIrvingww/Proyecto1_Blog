import React, { useEffect, useState, Suspense, lazy } from 'react'
import PropTypes from 'prop-types'
import './singlePost.css'
import useLogin from '../../Hooks/useLogin'

const Skeleton = lazy(() => import('./Skeleton'))

export default function SinglePost ({ postId }) {
  const [post, setPost] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState('')
  const [editedContent, setEditedContent] = useState('')
  const [editedImage64, setEditedImage64] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { isAdmin } = useLogin()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://api-postgres.onrender.com/blogs/${postId}`)
        const postData = await response.json()
        console.log('Post Data:', postData)
        setPost(postData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    }
    fetchPost()
  }, [postId])

  useEffect(() => {
    if (post && post.length > 0) {
      setEditedTitle(post[0].title)
      setEditedContent(post[0].content)
    }
  }, [post])

  const deletePost = async () => {
    try {
      const response = await fetch(`https://api-postgres.onrender.com/blogs/${postId}`, {
        method: 'DELETE'
      })
      if (response.status === 200) {
        console.log('Post deleted successfully')
        window.location.href = '/home'
      } else {
        console.log('Error deleting post')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  const editPost = async (e) => {
    e.preventDefault()
    try {
      console.log('Data to send:', {
        title: editedTitle,
        content: editedContent,
        image64: editedImage64
      })

      const response = await fetch(`https://api-postgres.onrender.com/blogs/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: editedTitle,
          content: editedContent,
          image64: editedImage64
        })
      })

      const updatedPostData = await response.json()
      console.log('Updated Post Data:', updatedPostData)
      setPost(updatedPostData)
      setIsEditing(false)
      window.location.reload()
    } catch (error) {
      console.error('Error updating post:', error)
    }
  }

  if (isLoading) {
    return (
      <Suspense fallback={<Skeleton />}>
        <Skeleton />
      </Suspense>
    )
  }

  const alertOnClick = () => {
    alert('Only admin can do this action')
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {isEditing
          ? (
            <div className='write' >
              <form className='writeForm' onSubmit={(e) => editPost(e)}>
                <div className="writeFormGroup">
                  <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                  </label>
                  <input type="file" id="fileInput" style={{ display: 'none' }} />
                  <input
                    type="text"
                    placeholder='New Title'
                    autoFocus={true}
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="writeInput" />
                </div>
                <div className="writeFormGroup">
                  <textarea
                    placeholder='New Content'
                    style={{ width: '100%', height: '60vh' }}
                    value={editedContent}
                    type="text"
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="writeInput writeText">
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
                <button type="submit" className="writeSubmit">
                  Save
                </button>
              </form>
            </div>
            )
          : (
            <>
              <h1 className="singlePostTitle">
                <img src={post[0].image64}
                  alt=""
                  className="singlePostImg"
                />
                {post[0].title}

                <div className="singlePostEdit">
                  {isAdmin
                    ? (
                      <>
                        <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setIsEditing(true)}></i>
                        <i className="singlePostIcon fa-regular fa-trash-can" onClick={() => deletePost(postId)}></i>
                      </>
                      )
                    : (
                      <>
                        <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => alertOnClick()} ></i>
                        <i className="singlePostIcon fa-regular fa-trash-can" onClick={() => alertOnClick()} ></i>

                      </>

                      )}
                </div>
              </h1>
              <div className="singlePostInfo">
                <span className='singlePostAuthor'>Autor: <b>IRVS</b> </span>
                <span className='singlePostDate'>Date: {post[0]._date} </span>
              </div>
              <p className='singlePostDesc'>{post[0].content}</p>
            </>
            )}
      </div>
    </div>
  )
}

SinglePost.propTypes = {
  postId: PropTypes.string.isRequired
}
