import { Request, Response } from 'express';
import { bookings } from '../models/bookingModel';

const createBooking = (req: Request, res: Response) => {
  const { userId, hotelId, roomsBooked, checkIn, checkOut } = req.body;
  const newBooking = { userId, hotelId, roomsBooked, checkIn, checkOut };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
};

const getBookings = (req: Request, res: Response) => {
  res.json(bookings);
};

export { createBooking, getBookings };
