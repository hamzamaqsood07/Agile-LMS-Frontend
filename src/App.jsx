import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,redirect,RouterProvider } from 'react-router-dom'
import Login from './routes/Login'
import Dashboard from './components/Dashboard'
import Signup from './routes/Signup'

function App() {
  const logoutLoader = async ()=>{
    const response = await fetch("http://localhost:3000/logout",{
      method:"POST",
      credentials:'include'
    })
    if(response.status==200){
      return redirect("/login")
    }
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Dashboard/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/logout",
      loader:logoutLoader
    }
  ])

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
