import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbarLogoutContainer'>
        <NavLink className='navbarLogoutLink' to="/logout">Logout</NavLink>
        </div>
      </nav>
    </>
  )
}
