import React from 'react'
import { useDispatch } from 'react-redux'
import { sendAdminAuthRequest } from '../../apis/api'
import { adminActions } from '../../store/main'
import Authform from '../Auth/Authform'

const Admin = () => {
  const dispatch = useDispatch()

  const getData =(data)=>{
    console.log("Admin",data)
    sendAdminAuthRequest(data.input).then((res)=>console.log(res))
    .then(()=>dispatch(adminActions.login()))
    .catch((err)=>console.log(err))
  }
  return (
    <div>
      <Authform onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin
