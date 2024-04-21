import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='signup_container'>
            <div className='signup_form'>
                <h2>Login</h2>
                <br />
                <form action="">
                    <div>
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" placeholder= 'Enter Email'/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" placeholder='********'/>
                    </div>
                    <button className= 'signup_btn'>Login</button>
                </form>
                <br></br>
                <p>Not Registered?</p>
                <Link to="/register"><button>Signup</button></Link>
            </div>
        </div>
    )
}

export default Login