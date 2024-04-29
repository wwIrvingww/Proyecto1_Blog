import React from 'react'
import './settings.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import useLogin from '../../Hooks/useLogin'
import NotAdmin from './NotAdmin'

export default function Settings () {
  const { isLoggedin } = useLogin()
  const { isAdmin } = useLogin()
  if (!isLoggedin) {
    return <h1>You&apos;re not logged</h1>
  }
  if (!isAdmin) {
    return (<NotAdmin/>)
  }
  return (
        <>

            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Update Your Account</span>

                    </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img
                            src="https://i.pinimg.com/originals/a8/96/db/a896db882a6273fb83100ae86e97a8ca.jpg"
                            alt=""
                            />
                            <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-regular fa-user"></i>
                            </label>
                            <input type="file" id="fileInput" style={{ display: 'none' }} />
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="Irvs" />
                        <label>Password</label>
                        <input type="password"/>
                        <button className="settingsSubmit">Update</button>

                    </form>
                </div>
                <Sidebar/>
            </div>
        </>
  )
}
