import React from 'react'
import {AppBar,Toolbar } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import {Box} from "@mui/system"
import './header.css'
const Header = () => {
  return <AppBar>
    <Toolbar>
       <Box clasName='lol'>
        <MovieIcon></MovieIcon>
       </Box>
    </Toolbar>
  </AppBar>
}

export default Header
