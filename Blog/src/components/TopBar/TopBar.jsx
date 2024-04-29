import './topBar.css'
import useLogin from '../../Hooks/useLogin'

export default function TopBar ({ onRouteChange }) {
  const { isLoggedin, logout } = useLogin()

  const handleItemClick = (route) => {
    // Si el usuario presiona logout
    if (route === '/login') {
      logout()
    }
    onRouteChange(route)
  }

  if (!isLoggedin) {
    return <h1>You're not logged</h1>
  }

  return (
    <div className='top'>
      <div className='topLeft'>
        <a href='https://instagram.com' target='_blank' className='topIcon fa-brands fa-instagram' rel="noreferrer"></a>
        <a href='https://twitter.com' target='_blank' className='topIcon fa-brands fa-x-twitter' rel="noreferrer"></a>
        <a href='https://github.com' target='_blank' className='topIcon fa-brands fa-github' rel="noreferrer"></a>
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
            PLAYLIST'S
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
        <img className='topImg' src='https://i.pinimg.com/564x/47/4b/8a/474b8a199086b29ae636a06fd3ecbf6d.jpg' alt='' />
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}
