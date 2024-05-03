import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Home from '../../Pages/Home/Home'
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register'
import Single from '../../Pages/Single/Single'
import Settings from '../../Pages/Settings/Settings'
import Write from '../../Pages/Write/Write'
import Playlist from '../../Pages/Playlist/Playlist'

function Router ({ ruta, navigate }) {
  const [postId, setPostId] = useState(null)

  useEffect(() => {
    const match = ruta.match(/^\/single\/(\d+)$/)
    if (match) {
      setPostId(match[1])
    } else {
      setPostId(null)
    }
  }, [ruta])

  if (postId !== null) {
    return <Single postId={postId} />
  }

  switch (ruta) {
    case '/':
      return <Login />
    case '/login':
      return <Login />
    case '/home':
      return <Home navigate={navigate} />
    case '/register':
      return <Register />
    case '/settings':
      return <Settings />
    case '/write':
      return <Write />
    case '/playlist':
      return <Playlist />
    default:
      return (
        <div>
          <h1>Ruta actual {ruta}</h1>
        </div>
      )
  }
}

Router.propTypes = {
  ruta: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired
}

export default Router
