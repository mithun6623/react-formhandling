import React from 'react'
import "./Navbar.css"

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='title'>
            <h2>Mithun</h2>
        </div>
        <div className='nav-links'>
            <ul >
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar