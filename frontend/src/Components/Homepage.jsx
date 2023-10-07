import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Typography } from '@mui/material';
import './homepage.css'; // Import the CSS file
import MovieItem from './movies/movieitem';
import { getAllMovies } from '../apis/api';

const Homepage = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="box-container" postion='sticky'>
      <Box className="inner-box">
        <img
          className="image"
          src="https://www.livelaw.in/h-upload/2023/08/21/750x450_487868-jailer.webp"
          alt="Jailer"
        />
        <Box padding={5} margin="auto">
          <Typography variant="h4" className="heading">
            Latest releases
          </Typography>
        </Box>
        <Box display={"flex"} width="100%" justifyContent={"center"} flexWrap="wrap">
          {movies &&  movies.slice(0,4).map((movie) => (
            <MovieItem
            id={movie._id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            postUrl={movie.postUrl}
          />
          
          ))}
        </Box>
        <Box display="flex" padding={5} margin="auto">
          <Button variant="outlined" sx={{ margin: "auto", color: "#2b2d42" }}>
            View all Movies
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Homepage;
