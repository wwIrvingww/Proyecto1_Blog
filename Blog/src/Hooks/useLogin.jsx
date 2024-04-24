import { createContext, useContext, useState, useEffect } from 'react'

const LoginContext = createContext({ })

const LoginProvider = ({ children }) => {
    const[isLoggedin, setIsLoggedin] = useState(false)

    const login = () => {
        setIsLoggedin(true)
    }
    const logout = () => {
        setIsLoggedin(false)
    }

  return (
    <LoginContext.Provider value={{ isLoggedin, login, logout}}>
      {children}
    </LoginContext.Provider>
  )
}

const useLogin = () => {
  return useContext(LoginContext)
}

export default useLogin
export { LoginProvider }