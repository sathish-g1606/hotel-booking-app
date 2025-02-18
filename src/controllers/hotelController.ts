import { Request, Response } from 'express';
import { hotels } from '../models/hotelModel';

const getHotels = (req: Request, res: Response): Response => {
  const { location } = req.query;

  if (typeof location === 'string') {
    const filteredHotels = hotels.filter(hotel => hotel.location.toLowerCase() === location.toLowerCase());
    return res.json(filteredHotels);
  }

  // If no location is provided or it's not a string, return all hotels
  const filteredHotels = hotels;
  return res.json(filteredHotels);
};

export { getHotels };
