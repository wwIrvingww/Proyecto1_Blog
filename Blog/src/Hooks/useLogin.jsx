import { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(() => {
    // Verificar si hay un estado de inicio de sesión almacenado en LocalStorage
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });

  const [isAdmin, setIsAdmin] = useState( ()=> {
    const storedAdmin = localStorage.getItem('isAdmin');
    return storedAdmin ? JSON.parse(storedAdmin) : false;
  });

  const login = async (user, password) => {
    console.log(`User: ${user}, Password: ${password}`); 
    try {
      const response = await fetch('http://127.0.0.1:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, password }),
      });
      console.log('Login response:', response); 

    const data = await response.json(); // Convertir la respuesta a JSON
    console.log('Login response:', data); // Imprimir la respuesta

    if (data[0].id == 1) { 
      console.log('You are an admin!');
      setIsAdmin(true); // Establecer el estado de administrador en verdadero
      localStorage.setItem('isAdmin', true); // Almacenar el estado de administrador en LocalStorage 
    } else {
      setIsAdmin(false); // Establecer el estado de administrador en falso
      localStorage.setItem('isAdmin', false); // Almacenar el estado de administrador en LocalStorage
    }


      if (response.ok) {
        setIsLoggedin(true);
        localStorage.setItem('isLoggedIn', true);
      } else {
        throw new Error('Failed to login');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const logout = () => {
    setIsLoggedin(false);
    // Borra el estado de inicio de sesión del LocalStorage al cerrar sesión
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
  };

  return (
    <LoginContext.Provider value={{ isLoggedin, isAdmin, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};

export default useLogin;
export { LoginProvider };
