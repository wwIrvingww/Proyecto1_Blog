import './login.css'
import useLogin from '../../Hooks/useLogin'

export default function Login(){
    const {login} = useLogin()
    return(
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className='loginForm'>
                <label>Email</label>
                <input type="text" className="loginInput" placeholder='Enter your email...' />
                <label>Password</label>
                <input type="paswword" className="loginInput" placeholder='Enter your password'/>
                <button className='loginButton' onClick={(e)=>{
                    e.preventDefault()
                    login()}}>Login</button>
            </form>
            <button className='loginRegisterButton'>Register</button>
        </div>
    )
}