import './topBar.css'

export default function TopBar({ onRouteChange }) {

  const handleItemClick = (route) => {
    onRouteChange(route);
  };

  return (
    <div className='top'>
        <div className='topLeft'>
            <a href="https://instagram.com" target="_blank" className="topIcon fa-brands fa-instagram"></a>
            <a href="https://twitter.com" target="_blank" className="topIcon fa-brands fa-x-twitter"></a>
            <a href="https://github.com" target="_blank" className="topIcon fa-brands fa-github"></a>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem' onClick={() => handleItemClick('/home')}>HOME</li>
                <li className='topListItem' onClick={() => handleItemClick('/write')}>WRITE</li>
                <li className='topListItem' onClick={() => handleItemClick('/playlists')}>PLAYLIST'S</li>
                <li className='topListItem' onClick={() => handleItemClick('/settings')}>SETTINGS</li>
                <li className='topListItem' onClick={() => handleItemClick('/login')}>LOGOUT</li>
            </ul>
        </div>
        <div className='topRight'>
            <img
                className='topImg'
                src='https://i.pinimg.com/564x/47/4b/8a/474b8a199086b29ae636a06fd3ecbf6d.jpg'
                alt=''
            />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
