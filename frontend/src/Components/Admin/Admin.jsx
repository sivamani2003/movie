import React from 'react'
import { useDispatch } from 'react-redux'
import { sendAdminAuthRequest } from '../../apis/api'
import { adminActions } from '../../store/main'
import Authform from '../Auth/Authform'

const Admin = () => {
  const dispatch = useDispatch()
  const onResReceived = (data)=>{
    console.log(data)
    dispatch(adminActions.login())
    localStorage.setItem("adminId",data.id)
    localStorage.setItem("token",data.token)
  }
  const getData =(data)=>{
    console.log("Admin",data)
    sendAdminAuthRequest(data.input)
    .then(onResReceived)
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <Authform onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin
