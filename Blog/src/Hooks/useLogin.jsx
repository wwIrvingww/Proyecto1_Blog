import { createContext, useContext, useState, useEffect } from 'react';

const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(() => {
    // Verificar si hay un estado de inicio de sesión almacenado en LocalStorage
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
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

      if (response.ok) {
        setIsLoggedin(true);
        // Almacena el estado de inicio de sesión en LocalStorage
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
  };

  return (
    <LoginContext.Provider value={{ isLoggedin, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => {
  return useContext(LoginContext);
};

export default useLogin;
export { LoginProvider };
