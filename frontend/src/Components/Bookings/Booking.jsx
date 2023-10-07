import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDeatils } from '../../apis/api'

const Booking = () => {
    const [movie,setmovie]= useState()
    const id = useParams().id
    console.log(id)
    useEffect(()=>{
        getMovieDeatils(id).then((res)=>setmovie(res.movie)).catch((err)=>console.log(err))
    },[id])
    console.log(movie)
  return (
    <div>
      Booking
    </div>
  )
}

export default Booking
