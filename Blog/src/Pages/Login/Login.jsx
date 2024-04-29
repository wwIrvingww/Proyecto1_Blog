import './login.css'
import useLogin from '../../Hooks/useLogin'
import { useState } from 'react'

export default function Login () {
  const { login } = useLogin()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    login(user, password)
  }

  return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className='loginForm' onSubmit={handleLogin}>
                <label>User</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder='Enter your user'
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
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
        </div>
  )
}
