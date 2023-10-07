import React from 'react'
import { useDispatch } from 'react-redux'
import { sendUserAuthRequest } from '../../apis/api'
import { userActions } from '../../store/main'
import Authform from './Authform'

const Auth = () => {
  const dispatch =useDispatch()
  
  const getData = (data) => { 
    console.log("Auth", data);
    sendUserAuthRequest(data.input, data.signup)
    .then((res) => {
      console.log(res);
    })
    .then(() => dispatch(userActions.login()))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Authform onSubmit={getData} isAdmin={false} />
    </div>
  )
}

export default Auth
