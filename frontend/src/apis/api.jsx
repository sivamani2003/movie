import axios from "axios";

export const getAllMovies = async () => {
  try {
    const res = await axios.get("http://localhost:4000/movie")
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
