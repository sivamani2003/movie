import React from 'react'
import Authform from '../Auth/Authform'

const Admin = () => {
  const getData =(data)=>{
    console.log("Admin",data)
  }
  return (
    <div>
      <Authform onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin
