import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-section'>
        <div className='navbarLogo'>
           <Link to='/' className='navbarLogo'><h1>SUBY</h1></Link>
        </div>
        <div>
            <input type='text' placeholder='Search' className='navbarInput'/>
        </div>
        <div className='navbarLogin'>
            Login / Register Now
        </div>
      
    </div>
  )
}

export default Navbar
