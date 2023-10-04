import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user-routes.js'
import adminRouter from './routes/admin-routes.js'
import movieRouter from './routes/movie-routes.js'
import bookingsRouter from './routes/booking-routes.js'
import cors from 'cors'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors());
app.use("/users",userRouter)
app.use("/admin",adminRouter)
app.use("/movie",movieRouter)
app.use("/booking",bookingsRouter)
mongoose.connect(`mongodb+srv://siva:A12345678b@cluster0.0eh2ppt.mongodb.net/?retryWrites=true&w=majority`).then(()=>app.listen(4000,()=>console.log("connected to server with database"))).catch(e=>console.log(e));
