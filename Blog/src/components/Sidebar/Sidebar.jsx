import React from 'react'
import './sidebar.css'

export default function Sidebar () {
  return (
        <div className="sidebar">
          <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
            src = "https://i.pinimg.com/originals/a8/96/db/a896db882a6273fb83100ae86e97a8ca.jpg"
            alt = ""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias consequatur impedit animi repudiandae, assumenda culpa.
            </p>
          </div>
          <div className="sidebarItem">
          <span className="sidebarTitle">Hobbies</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Chess</li>
            <li className="sidebarListItem">Basketball</li>
            <li className="sidebarListItem">Cooking</li>
            <li className="sidebarListItem">Creative Writing</li>
            <li className="sidebarListItem">Fashion</li>
            <li className="sidebarListItem">Reading</li>
          </ul>
          </div>
          <div className="sidebarItem">
          <span className="sidebarTitle">Follow me</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-x-twitter"></i>
            <i className="sidebarIcon fa-brands fa-github"></i>
          </div>
          </div>
        </div>
  )
}
