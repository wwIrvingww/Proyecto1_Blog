import React from 'react'
import PropTypes from 'prop-types'
import './topBar.css'
import useLogin from '../../Hooks/useLogin'

export default function TopBar ({ onRouteChange }) {
  const { isLoggedin, logout } = useLogin()

  const handleItemClick = (route) => {
    if (route === '/login') {
      logout()
    }
    onRouteChange(route)
  }

  if (!isLoggedin) {
    return
  }

  return (
    <div className='top'>
      <div className='topLeft'>
        <a href='https://www.instagram.com/evil_irving/?igsh=MXFkcWxlajQ1bWk3eA%3D%3D' target='_blank' className='topIcon fa-brands fa-instagram' rel="noreferrer"></a>
        <a href='https://twitter.com/irvingkiaro' target='_blank' className='topIcon fa-brands fa-x-twitter' rel="noreferrer"></a>
        <a href='https://github.com/wwIrvingww' target='_blank' className='topIcon fa-brands fa-github' rel="noreferrer"></a>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem' onClick={() => handleItemClick('/home')}>
            HOME
          </li>
          <li className='topListItem' onClick={() => handleItemClick('/write')}>
            WRITE
          </li>
          <li className='topListItem' onClick={() => handleItemClick('/playlist')}>
            PLAYLIST
          </li>
          <li className='topListItem' onClick={() => handleItemClick('/settings')}>
            SETTINGS
          </li>
          <li className='topListItem' onClick={() => handleItemClick('/login')}>
            LOGOUT
          </li>
        </ul>
      </div>
      <div className='topRight'>
        <img className='topImg' src='https://i.pinimg.com/736x/b7/c3/0a/b7c30a6a3d32ac6e4c38791b20780822.jpg' alt='' />
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}

TopBar.propTypes = {
  onRouteChange: PropTypes.func.isRequired
}
