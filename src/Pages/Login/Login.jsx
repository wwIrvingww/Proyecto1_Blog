import React, { useState } from 'react'
import './login.css'
import UseLogin from '../../Hooks/useLogin'

export default function Login () {
  const { login } = UseLogin()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(username, password)
      window.location.href = '/home'
    } catch (error) {
      setError(error.message)
      console.error('Error during login:', error)
    }
  }

  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className='loginForm' onSubmit={handleLogin}>
        <label>username</label>
        <input
          type="text"
          className="loginInput"
          placeholder='Enter your username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='loginButton' type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}
