import express from "express";
import { deleteBooking, getBookingByID, newBooking } from "../controllers/booking-controller.js";
const bookingsRouter = express.Router();
bookingsRouter.post('/',newBooking)
bookingsRouter.get('/:id',getBookingByID)
bookingsRouter.delete('/:id',deleteBooking)
export default bookingsRouter;