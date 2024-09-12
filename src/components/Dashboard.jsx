import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Table from '../routes/Table'

export default function Dashboard() {
  return (
    <>
      <div style={{ height: "551px", width: "234px", position: "fixed", top: "0", left: "0", backgroundColor: "purple", color: "white" }}>

        <div style={{ height: "40px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
          <img style={{ height: "53px", width: "53px" }} src="lmsLogo.png" alt="" />
        </div>
        <ul className="sidebar-menu" style={{ listStyle: "none", padding: "0" }}>
          <li style={{ padding: "15px 20px" }}><Link to="/dashboard">Dashboard</Link></li>
          <li style={{ padding: "15px 20px" }}><Link to="/students">Students</Link></li>
          <li style={{ padding: "15px 20px" }}><Link to="/assets">Assets</Link></li>
          <li style={{ padding: "15px 20px" }}><Link to="/results">Results & Grades</Link></li>
          <li style={{ padding: "15px 20px" }}><Link to="/inventory">Inventory</Link></li>
          <li style={{ padding: "15px 20px" }}><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
      <div style={{ border: "2px solid black", position: "relative",left:"110px",top:"37px", width: "80vw",height:"85vh" }}>
    <Table/>
      </div>
      <Navbar />
    </>
  )
}
