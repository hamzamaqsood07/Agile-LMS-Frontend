import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
      <div className='sidebarMainDiv'>

        <div className='sidebarImgContainer'>
          <img className='sidebarImg' src="lmsLogo.png" alt="" />
        </div>

        <div className='sidebarMenuContainer'>
          <ul className="sidebarMenu">
            <li className='sidebarMenuLists'><NavLink to="#">Dashboard</NavLink></li>
            <li className='sidebarMenuLists'><NavLink to="/table">Students</NavLink></li>
            <li className='sidebarMenuLists'><NavLink to="#">Assets</NavLink></li>
            <li className='sidebarMenuLists'><NavLink to="#">Results & Grades</NavLink></li>
            <li className='sidebarMenuLists'><NavLink to="#">Inventory</NavLink></li>
            <li className='sidebarMenuLists'><NavLink to="#">Settings</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  )
}
