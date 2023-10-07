import React from 'react'
import { sendAdminAuthRequest } from '../../apis/api'
import Authform from '../Auth/Authform'

const Admin = () => {
  const getData =(data)=>{
    console.log("Admin",data)
    sendAdminAuthRequest(data.input).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }
  return (
    <div>
      <Authform onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin
