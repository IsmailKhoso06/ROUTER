import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <ul>
     <Link to='/'><li>Home</li></Link>
      <Link to='/About'><li>About</li></Link>
     <Link to='/Work'> <li>Work</li></Link>
    </ul>
  </>
  )
}

export default Navbar
