import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const LoginContext = createContext({})

const LoginProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn')
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false
  })

  LoginProvider.propTypes = {
    children: PropTypes.node.isRequired
  }

  const [isAdmin, setIsAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem('isAdmin')
    return storedAdmin ? JSON.parse(storedAdmin) : false
  })

  const login = async (username, password) => {
    try {
      const response = await fetch('https://api-postgres.onrender.com/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log(data)

      if (data[0].id === 1) {
        setIsAdmin(true)
        localStorage.setItem('isAdmin', true)
      } else {
        setIsAdmin(false)
        localStorage.setItem('isAdmin', false)
      }

      setIsLoggedin(true)
      localStorage.setItem('isLoggedIn', true)
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  const logout = () => {
    setIsLoggedin(false)
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('isAdmin')
  }

  return (
    <LoginContext.Provider value={{ isLoggedin, isAdmin, login, logout }}>
      {children}
    </LoginContext.Provider>
  )
}

const UseLogin = () => {
  const context = useContext(LoginContext)
  if (!context) {
    throw new Error('useLogin must be used within a LoginProvider')
  }
  return context
}

export default UseLogin
export { LoginProvider }
