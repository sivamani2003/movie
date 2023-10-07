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