import React from 'react'
import '.style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
        const [username, setUsername] = useState()
        const [email, setEmail] = useState()
        const [password, setPassword] = useState()

        const handelSubmit = (e) => {
            e.preventDefault()
            axios.post('http://localhost:3001/register', {username, email, password})
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }

    return(
        <div className='signup_container'>
            <div className='signup_form'>
                <h2>Sign Up</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Username:</label>
                        <input type="text" placeholder=' Enter username'
                        onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" placeholder= 'Enter Email'
                       onChange={e => setEmail(e.target.value)}/> 
                    </div>
                    <br />
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" placeholder='********'
                        onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button className= 'signup_btn'>Sign up</button>
                </form>
                <br></br>
                <p>If already have account.</p>
                <Link to="/login"><button>Login</button></Link>
            </div>
        </div>
    )
}

export default Register