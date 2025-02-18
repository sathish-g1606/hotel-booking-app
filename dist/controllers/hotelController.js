"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHotels = void 0;
const hotelModel_1 = require("../models/hotelModel");
const getHotels = (req, res) => {
    const { location } = req.query;
    if (typeof location === 'string') {
        const filteredHotels = hotelModel_1.hotels.filter(hotel => hotel.location.toLowerCase() === location.toLowerCase());
        return res.json(filteredHotels);
    }
    // If no location is provided or it's not a string, return all hotels
    const filteredHotels = hotelModel_1.hotels;
    return res.json(filteredHotels);
};
exports.getHotels = getHotels;
