import React from 'react'
import { sendUserAuthRequest } from '../../apis/api'
import Authform from './Authform'

const Auth = () => {
  const getData = (data) => { 
    console.log("Auth", data);
    sendUserAuthRequest(data.input, data.signup)
      .then((res) => {
        console.log(res); 
      })
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
