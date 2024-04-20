// Recibe la ruta y renderiza el componente
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import Single from '../../Pages/Single/Single';
import Settings from '../../Pages/Settings/Settings'
import Write from '../../Pages/Write/Write';



function Router({ ruta }) {
    switch (ruta) {
        case "/":
            return <Home/>
        case "/home":
            return <Home/>
        case "/login":
            return <Login/>
        case "/register":
            return <Register/>
        case "/single":
            return <Single />
        case "/settings":
            return <Settings />
        case "/write":
            return <Write />
        default:
            return (
                <div>
                    <h1>Ruta actual {ruta}</h1>
                </div>
            )
    }
}

export default Router