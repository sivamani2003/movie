import axios from "axios";
import { BASE_URL } from "../Components/Auth/config";

export const getAllMovies = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/movie`)

    if (res.status !== 200) {
      console.log("No Data");
      return null;
    }
    const data = await res.data;
    return data;
  } catch (err) {
    console.log("Error:", err);
    throw err;
  }
};
export const sendUserAuthRequest = async(data,signup)=>{
  const res =await axios.post(`${BASE_URL}/users/${signup ? "signup":"login"}`,{
    name:signup ? data.name:"",
    email:data.email,
    password:data.password
  }).catch((err)=>console.log(err))
  if(res.status!==200 && res.status!==201){
    console.log("Un excepted error Occured")
  }
  const resData = await res.data;
  return resData
}
export const sendAdminAuthRequest = async(data)=>{
  const res =await axios.post(`${BASE_URL}/admin/login`,{
    email:data.email,
    password:data.password
  }).catch((err)=>console.log(err))
  if(res.status!==200){
    console.log("Un excepted error Occured")
  }
  const resData = await res.data;
  return resData
}  
export const getMovieDeatils = async(id)=>{
  const res = await axios.get(`${BASE_URL}/movie/${id}`).catch((err)=>console.log(err))
  if(res.status!==200){
    return console.log("Un expected Error")
  }
  const resData = await res.data;
  return resData
}
export const newBooking = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/booking`, {
      movie: data.movie,
      seatNumber: data.seatNumber,
      date: data.date,
      user: localStorage.getItem("userId")
    });

    if (res.status === 201) {
      // A status of 201 indicates a successful creation (booking created).
      const resData = await res.data;
      return resData;
    } else {
      console.error("Unexpected Error: Unable to create a new booking");
      console.error("Response status: " + res.status);
      throw new Error("Error creating a new booking");
    }
  } catch (err) {
    console.error("Error in newBooking:", err);
    throw err;
  }
};
export const getUserBooking = async () => {
  const id = localStorage.getItem("userId");
  try {
    const res = await axios.get(`${BASE_URL}/users/bookings/${id}`);
    
    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Unexpected Error: Unable to fetch user bookings");
      console.error("Response status: " + res.status);
      throw new Error("Error fetching user bookings");
    }
  } catch (err) {
    console.error("Error in getUserBooking:", err);
    throw err;
  }
};
