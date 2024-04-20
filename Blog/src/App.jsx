import { useEffect, useState } from 'react'
import './App.css'
import Router from './components/Router/Router'
import TopBar from './components/TopBar/TopBar'

function App() {
  const [rutaActual, setRutaActual] = useState("app")

  const handleRouteChange = (route) => {
    setRutaActual(route);
    window.history.pushState({}, '', route);
  };

  useEffect(() => {
    console.log("Se ha montado el componente")
    console.log("RUTA ACTUAL: ", window.location.pathname);
    setRutaActual(window.location.pathname)
    console.log(window.location);

  }, [])

  return (
    <div className='sitio-web'>
      <div className='paginas'>
          <TopBar onRouteChange={handleRouteChange} />
          <Router ruta={rutaActual}></Router>
      </div>
    </div>
  )
}

export default App