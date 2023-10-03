import React, { useEffect, useState } from 'react'
import {AppBar,Toolbar,Autocomplete,TextField } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import {Box} from "@mui/system"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './header.css'
import { getAllMovies } from '../apis/api.jsx';
const dummyArray=["RRR","Kushi","Toliprema"];
const Header = () => {
  const [value,setValue]= useState(0);
  useEffect(()=>{
    getAllMovies().then((data)=>console.log(data))
    .catch((err)=>console.log(err))
  },[])
  return <AppBar sx={{bgcolor:"#2b2d42"}} >
    <Toolbar>
       <Box className='p1'>
        <MovieIcon></MovieIcon>
       </Box>
       <Box className='p2'>
       <Autocomplete
        freeSolo
        options={dummyArray.map((option) => option)}
        renderInput={(params) => <TextField 
          sx={{input:{color:"white"}}}
          variant='standard' {...params} placeholder="Search Across Movies" />}
      />
       </Box>
       <Box className='p3'>
            <Tabs textColor='inherit' indicatorColor='secondary' value={value }onChange={(e,val)=>setValue(val)}>
                <Tab label='Movies'></Tab>
                <Tab label='Admin'></Tab>
                <Tab label='Auth'></Tab>
            </Tabs>
       </Box>
    </Toolbar>
  </AppBar>
}

export default Header
