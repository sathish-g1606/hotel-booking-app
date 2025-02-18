interface Booking {
    userId: number;
    hotelId: number;
    roomsBooked: number;
    checkIn: string;
    checkOut: string;
  }
  
  const bookings: Booking[] = [];
  
  export { bookings };
  