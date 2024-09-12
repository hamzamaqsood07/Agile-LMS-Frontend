import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav style={{width:"81.7%",height:"75px",position:"fixed",top:"0",left:"230px",backgroundColor:"purple"}}>
        <NavLink to="/logout">Logout</NavLink>
      </nav>
    </>
  )
}
