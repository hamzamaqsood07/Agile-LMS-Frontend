import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Mainbar() {


    return (
        <>
            <div className='mainbarContainer'>
            <Outlet />
            </div>
        </>
    )
}
