import { useEffect, useState } from 'react'
import './App.css'
import Router from './components/Router/Router'

function App() {
  
  const [rutaActual, setRutaActual] = useState("app")

  useEffect(() => {
    console.log("Se ha montado el componente")
    console.log("RUTA ACTUAL: ", window.location.pathname);
    setRutaActual(window.location.pathname)
    console.log(window.location);

  }, [])

  return (
    <div className='sitio-web'>
      <div className='paginas'>
          <Router ruta={rutaActual}></Router> 
      </div>
    </div>
  )
}

export default App