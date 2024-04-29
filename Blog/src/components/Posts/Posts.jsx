import React, { useEffect, useState, Suspense } from 'react'
import './posts.css'
import Skeleton from './Skeleton'
import PropTypes from 'prop-types'
import Post from '../Post/Post' // Importa el componente Post directamente aquí

const Posts = ({ navigate }) => {
  const [postlist, setpostlist] = useState([])

  useEffect(() => {
    const callAPI = async () => {
      console.log('Calling API...')
      const response = await fetch('http://127.0.0.1:3001/blogs')
      const body = await response.json()
      console.log(body)
      const newPosts = body.map((b) => {
        return {
          image: b.image64,
          title: b.title,
          description: b.content,
          date: b.date,
          id: b.id
        }
      })
      setpostlist(newPosts)
    }
    callAPI()
  }, [])

  if (postlist.length === 0) {
    return <Skeleton /> // Muestra el esqueleto mientras se cargan los datos
  }

  return (
    <Suspense fallback={<Skeleton />}>
      <div className="posts">
        {postlist.map((post) => (
          <Post
            key={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
            date={post.date}
            id={post.id}
            navigate={navigate}
          />
        ))}
      </div>
    </Suspense>
  )
}

Posts.propTypes = {
  navigate: PropTypes.func.isRequired
}

export default Posts
