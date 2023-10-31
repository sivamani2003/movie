import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Authform.css';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const labelstyle = { mt: 1, mb: 1 };

const Authform = ({ onSubmit, isAdmin }) => {
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isSignup, setIsSignup] = useState(false);

  const handleFormSwitch = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ input, signup: isAdmin ? false : isSignup });
  };

  const handleChange = (e) => {
    setinput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: 'auto', padding: 1 }}>
        <IconButton>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant='h4' className='auth1'>
        {isSignup ? 'Signup' : 'Login'}
      </Typography>
      <form className='form' onSubmit={handleSubmit}>
        <Box className='formContainer'>
          {!isAdmin && isSignup && (
            <>
              <FormLabel className={labelstyle}>Name</FormLabel>
              <TextField
                value={input.name}
                onChange={handleChange}
                margin='normal'
                variant='standard'
                type='text'
                name='name'
              />
            </>
          )}
          <FormLabel sx={labelstyle}>Email</FormLabel>
          <TextField
            margin='normal'
            value={input.email}
            onChange={handleChange}
            variant='standard'
            type='email'
            name='email'
          />
          <FormLabel sx={labelstyle}>Password</FormLabel>
          <TextField
            margin='normal'
            value={input.password}
            onChange={handleChange}
            variant='standard'
            type='password'
            name='password'
          />
          {/* <div className="metamask-link">
            <p>Connect with MetaMask</p>
            <a href="#metamask-auth">
              <img className='meta-mask-image' width={"10%"}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" alt="MetaMask" />
            </a>
          </div> */}

          <Button
            sx={{ mt: 2, borderRadius: 10, bgcolor: '#10b5cb' }}
            type='submit'
            fullWidth
            variant='contained'
          >
            {isSignup ? 'Signup' : 'Login'}
          </Button>
          {!isAdmin && (
            <Button
              onClick={handleFormSwitch}
              sx={{ mt: 2, borderRadius: 10 }}
              type='button'
              fullWidth
            >
              {isSignup ? 'Login' : 'Signup'}
            </Button>
          )}
        </Box>
      </form>
    </Dialog>
  );
};

export default Authform;
