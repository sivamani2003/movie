import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDeatils } from '../../apis/api';
import { Box, Typography } from '@mui/material';
import './booking.css';

const Booking = () => {
  const [movie, setmovie] = useState();
  const id = useParams().id;

  useEffect(() => {
    getMovieDeatils(id)
      .then((res) => setmovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="booking-container">
      {movie && (
        <Fragment>
          <Typography padding={3}
            fontFamily="fantasy"
            variant='h4'
            textAlign={"center"}
          >
            Book Tickects of Movie :{movie.title}
          </Typography>
          <Box display={"flex"} justifyContent="center" >
            <Box display={"flex"} justifyContent={"column"} flexDirection="column"
              paddingTop={3}
              width="50%"
              marginRight={"auto"}
            >
              <img width="80%"
                height={"300px"}
                src={movie.postUrl} alt={movie.title} />
            </Box>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
