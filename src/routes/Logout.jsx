import React from 'react'

export default function Logout() {
    const func =async ()=>{
        const response = await fetch("http://localhost:3000/logout",{credentials:'include'})
        const data =await response.json()
        console.log(data.message)
    }
    func()
  return (
    <div>
      hello
    </div>
  )
}
