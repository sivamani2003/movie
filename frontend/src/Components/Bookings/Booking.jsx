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
          <Typography className='booking1' variant='h4'>
            Book Tickets for Movie: {movie.title}
          </Typography>
          <Box className="book2">
            <Box className="book3">
              <img width="80%" height={"300px"} className='book4' src={movie.postUrl} alt={movie.title} />
            </Box>
            <Box width={"80%"}>

            </Box>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
