import React from 'react'
import './sidebar.css'

export default function Sidebar () {
  return (
        <div className="sidebar">
          <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
            src = "https://i.pinimg.com/736x/d9/6d/45/d96d4533ce29a81fac3fdde62c522680.jpg"
            alt = ""
            />
            <p>
              Soy Irving Acosta y me gusta concinar.En el 2022 (cuando inicié la universidad) inicié a cocinar por supervivencia.
              Al principio eran cosas sencillas, pero con el tiempo fui mejorando y ahora puedo cocinar cosas más elaboradas (según yo).
              Me gusta cocinar porque es algo que requiere tiempo y me deja expresar mi creatividad. Además, es algo que algo puedo compartir con los demás, más allá de cocinar para mí, me gusta cuando alguien más prueba lo que hice y le gusta.
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
