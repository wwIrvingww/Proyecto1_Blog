import './settings.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import TopBar from '../../components/TopBar/TopBar';

export default function Settings (){
    return(
        <>
        <TopBar/>
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Update Your Account</span>
                        <span className="settingsDeleteTitle">Delete Account</span>
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
                            <input type="file" id="fileInput" style={{display: "none"}} />
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="Irvs" />
                        <label>Email</label>
                        <input type="email" placeholder="mor22781@uvg.edu.gt" />
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