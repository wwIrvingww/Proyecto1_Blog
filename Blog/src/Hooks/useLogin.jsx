import { createContext, useContext, useState } from 'react';

const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);

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
      } else {
        throw new Error('Failed to login');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const logout = () => {
    setIsLoggedin(false);
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
