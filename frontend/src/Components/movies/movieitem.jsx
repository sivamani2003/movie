import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import "./movieitem.css"

const MovieItem = ({ title, releaseDate, postUrl, id }) => {
  return (
    <Card
      sx={{
        width: 230,
        height: 320,
        borderRadius: 5,
        margin: '16px', // Add margin here to create space between cards
        ":hover": { boxShadow: "10px 10px 20px #ccc" },
      }}
    >
      <CardActionArea>
        <img height={"50%"} width="100%" src={postUrl} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(releaseDate).toDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" color="primary" className='share'>
          Book
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieItem;
