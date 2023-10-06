import React from 'react';
import { Box, Button, Card, Typography } from '@mui/material';
import './homepage.css'; // Import the CSS file
 import MovieItem from './movies/movieitem';
import './homepage.css'
const Homepage = () => {
  return (
    <div className="box-container" postion='sticky'>
      <Box className="inner-box">
        <img className="image" src="https://www.livelaw.in/h-upload/2023/08/21/750x450_487868-jailer.webp" alt="Jailer" />
        <Box padding={5} margin="auto">
          <Typography variant="h4" className="heading">Latest releases</Typography>
        </Box>
       <Box className="p0">
        {[1,2,3,4].map((item)=><MovieItem key={item}/>)}
       </Box>
       <Box className="p1">
          <Button variant="outlined" sx={{margin:"auto" ,colour:"#2b2d42"}}>Veiw all Movies</Button>
       </Box>
      </Box>
    </div>
  );
}

export default Homepage;
