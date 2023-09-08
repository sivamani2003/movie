import React from 'react'
import {AppBar,Toolbar,Autocomplete,TextField } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import {Box} from "@mui/system"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './header.css'
const dummyArray=["RRR","Kushi","Toliprema"];
const Header = () => {
  return <AppBar>
    <Toolbar>
       <Box className='p1'>
        <MovieIcon></MovieIcon>
       </Box>
       <Box className='p2'>
       <Autocomplete
        freeSolo
        options={dummyArray.map((option) => option)}
        renderInput={(params) => <TextField variant='standard' {...params} label="Search Across Movies" />}
      />
       </Box>
       <Box className='p3'>
            <Tabs indicatorColor='secondary' value={1}>
                <Tab label='Movies'></Tab>
                <Tab label='Admin'></Tab>
                <Tab label='Auth'></Tab>
            </Tabs>
       </Box>
    </Toolbar>
  </AppBar>
}

export default Header
