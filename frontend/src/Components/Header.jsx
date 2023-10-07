import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Autocomplete, TextField } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { Box } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './header.css';
import { getAllMovies } from '../apis/api.jsx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from '../store/main';

const Header = () => {
  const dispatch = useDispatch()
  const isAdminloggedin = useSelector((state) => state.admin.isloggedin);
  const isUserloggedin = useSelector((state) => state.user.isloggedin);
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  const logout = (isAdmin) => {
    dispatch(isAdmin ? adminActions.logout() : userActions.logout());
  };
  
  return (
    <AppBar position='sticky' sx={{ bgcolor: '#10b5cb' }}>
      <Toolbar>
        <Box className='p1'>
          <MovieIcon></MovieIcon>
        </Box>
        <Box className='p2'>
          <Autocomplete
            freeSolo
            options={movies && movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: 'white' } }}
                variant='standard'
                {...params}
                placeholder='Search Across Movies'
              />
            )}
          />
        </Box>
        <Box className='p3'>
          <Tabs
            textColor='inherit'
            indicatorColor='secondary'
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to='/movies' label='Movies' />
            {!isAdminloggedin && !isUserloggedin && (
              <>
                <Tab LinkComponent={Link} to='/admin' label='Admin' />
                <Tab LinkComponent={Link} to='/auth' label='Auth' />
              </>
            )}
            {isUserloggedin && (
              <>
                <Tab LinkComponent={Link} to='/user' label='Profile' />
                <Tab onClick={()=>logout(false)} LinkComponent={Link} to='/' label='Logout' />
              </>
            )}
            {
              isAdminloggedin && (
                <>
                 <Tab  LinkComponent={Link} to='/add' label='Add Movie' />
                <Tab LinkComponent={Link} to='/admin' label='Admin' />
                <Tab  onClick={()=>logout(true)} LinkComponent={Link} to='/' label='Logout'/>
                </>
              ) 
            }
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
