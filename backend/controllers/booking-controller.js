import { body } from "express-validator";
import mongoose from "mongoose";
import Bookings from "../models/Bookings.js";
import Movie from "../models/Movie.js";
import User from "../models/User.js";
export const newBooking = async (req, res, next) => {
    const { movie, date, seatNumber, user } = req.body;

    let existingMovie;
    let existingUser;
    try {
        existingMovie = await Movie.findById(movie)
        existingUser = await User.findById(user)

        if(!existingMovie){
            return res.status(404).json({message:"MOvie not found with given id"})  
        }
        if(!existingUser){
            return res.status(404).json({message:"User not found"})
        }

    } catch (err) {
        return console.log(err)
    }
    let booking; 
    try {
       booking = new Bookings({ movie, date: new Date(`${date}`), seatNumber, user }); 

        const session =await mongoose.startSession();
        
        existingUser.bookings.push(booking)
        existingMovie.bookings.push(booking)
        await existingUser.save({session})
        await existingMovie.save({session})
        await booking.save({session})
        
        booking = await booking.save(); 
    } catch (err) {
        return console.log(err);
    }
    if (!booking) {
        return res.status(500).json({ message: "Request Failed" });
    }
    return res.status(201).json({ booking});
};