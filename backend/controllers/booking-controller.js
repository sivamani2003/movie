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
export const getBookingByID = async(req,res,next)=>{
    const id = req.params.id;
    let booking;
    try {
        booking = await Bookings.findById(id)
    } catch (err) {
        return console.log(err)
        
    }
    if(!booking){
        return res.status(500).json({message:"Error"})
    }
    return res.status(200).json({booking})
}
export const deleteBooking = async (req, res, next) => {
    const id = req.params.id;
    try {
        const booking = await Bookings.findByIdAndRemove(id).populate("user movie");

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        const session = await mongoose.startSession();
        session.startTransaction();

        if (booking.user && booking.user.bookings) {
            booking.user.bookings.pull(booking);
            await booking.user.save({ session });
        }

        if (booking.movie && booking.movie.bookings) {
            booking.movie.bookings.pull(booking);
            await booking.movie.save({ session });
        }

        await session.commitTransaction();
        session.endSession();

        res.status(200).json({ message: "Booking deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Unable to delete booking" });
    }
};
