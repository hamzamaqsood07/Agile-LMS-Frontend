import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './routes/Login'
import Dashboard from './components/Dashboard'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Dashboard/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ])

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
