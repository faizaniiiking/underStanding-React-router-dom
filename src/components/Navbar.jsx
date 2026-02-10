import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center'>
          <Link className="mr-6" to="/">Home</Link>
<Link className="mr-6" to="/about">About</Link>
<Link to="/contact">Contact</Link>


        </nav>
      
    </div>
  )
}

export default Navbar
