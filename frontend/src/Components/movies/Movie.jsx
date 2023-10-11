import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getAllMovies } from '../../apis/api';
import './movie.css';
import MovieItem from './movieitem';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        if (Array.isArray(data.movies)) {
          setMovies(data.movies);
        } else {
          console.error("API did not return an array of movies:", data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box margin="auto" marginTop={4}>
      <Typography
        margin="auto"
        variant='h4'
        padding={2}
        width="40%"
        color="#10b5cb"
        textAlign={"center"}
      >
        All Movies
      </Typography>
      <Box display={"flex"} width="100%" justifyContent={"flex-start"}  
      marginTop={5}
      flexWrap="wrap">
        {movies && movies.map((movie,index) => (
          <MovieItem
            key={index}
            id={movie._id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            postUrl={movie.postUrl}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Movie;
