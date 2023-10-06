import React, { useEffect, useState } from 'react'
import {AppBar,Toolbar,Autocomplete,TextField } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import {Box} from "@mui/system"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './header.css'
import { getAllMovies } from '../apis/api.jsx';
import { Link } from 'react-router-dom';
const dummyArray=["RRR","Kushi","Toliprema"];
const Header = () => {
  const [value,setValue]= useState(0);
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    getAllMovies().then((data)=>setMovies(data.movies))
    .catch((err)=>console.log(err))
  },[])
  return <AppBar position='sticky' sx={{bgcolor:"	#10b5cb"}} >
    <Toolbar>
       <Box className='p1'>
        <MovieIcon></MovieIcon>
       </Box>
       <Box className='p2'>
       <Autocomplete
        freeSolo
        options={movies && movies.map((option) => option.title)}
        renderInput={(params) => <TextField 
          sx={{input:{color:"white"}}}
          variant='standard' {...params} placeholder="Search Across Movies" />}
      />
       </Box>
       <Box className='p3'>
            <Tabs textColor='inherit' indicatorColor='secondary' value={value }onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={Link} to= "/movies"label='Movies'></Tab>
                <Tab label='Admin' LinkComponent={Link} to= "/admin"></Tab>
                <Tab label='Auth' LinkComponent={Link} to= "/auth"></Tab>
            </Tabs>
       </Box>
    </Toolbar>
  </AppBar>
}

export default Header
