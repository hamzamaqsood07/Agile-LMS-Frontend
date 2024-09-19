import "./app.css"
import Sidebar from './components/Sidebar'
import Mainbar from './components/Mainbar'
import StudentTable from './routes/Table'
import Signup from './routes/Signup'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Login from './routes/Login'
import Navbar from './components/Navbar'

function App() {

  const logoutLoader = async () => {
    const response = await fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: 'include'
    })
    if (response.status == 200) {
      return redirect("/login")
    }
  }

  const fetchStudents = async ()=>{
    const response = await fetch("http://localhost:3000/student/read")
    return await response.json()
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Sidebar />
          <Navbar />
          <Mainbar />
        </>
      ),
      children: [
        {
          path: "/table",
          element: <StudentTable />,
          loader:fetchStudents
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/logout",
      loader: logoutLoader
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
