import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className=''>
            <div><h3>Cane Corso Tried & True Blog</h3></div>
            <div>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Blog</a>
                <a href="">Create</a>
                <a href="">Products</a>
                <a href="">Contact</a>
            </div>
            <div><h5><Link to="/register" className="Link">Register/Login</Link></h5></div>
        </div>
    )
}

export default Navbar
