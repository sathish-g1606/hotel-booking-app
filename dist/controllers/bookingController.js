"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookings = exports.createBooking = void 0;
const bookingModel_1 = require("../models/bookingModel");
const createBooking = (req, res) => {
    const { userId, hotelId, roomsBooked, checkIn, checkOut } = req.body;
    const newBooking = { userId, hotelId, roomsBooked, checkIn, checkOut };
    bookingModel_1.bookings.push(newBooking);
    res.status(201).json(newBooking);
};
exports.createBooking = createBooking;
const getBookings = (req, res) => {
    res.json(bookingModel_1.bookings);
};
exports.getBookings = getBookings;
