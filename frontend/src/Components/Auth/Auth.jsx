import React from 'react';
import { useDispatch } from 'react-redux';
import { sendUserAuthRequest } from '../../apis/api';
import { userActions } from '../../store/main';
import Authform from './Authform';

const Auth = () => {
  const dispatch = useDispatch();
  const onResReceived = (data)=>{
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
  }
  const getData = (data) => {
    console.log("Auth", data);
    sendUserAuthRequest(data.input, data.signup)
      .then(onResReceived)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Authform onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default Auth;
