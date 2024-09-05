import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './routes/Login'
import Grid from './routes/Grid'

function App() {
  const router = createBrowserRouter([
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
