Hotel Room Booking Web Application
==================================

## Overview

This is a simple Hotel Room Booking web application built using Node.js, Express, and TypeScript. It allows users to:

    View available hotels and filter them by location.
    Book rooms at a hotel by specifying the number of rooms and check-in/check-out dates.
    View and manage their bookings.
    Modify or cancel bookings.

The app follows a N-tier architecture with a clear separation between the frontend (views), backend (API), and data layer (in-memory storage).

## Features

    Hotel List and Filter by Location:
        Displays a list of available hotels.
        Filters hotels based on location.

    Room Booking:
        Allows users to book rooms at a hotel.
        User specifies check-in date, check-out date, and number of rooms.

    Booking Management:
        Users can view their active bookings.
        Users can modify booking details (dates, number of rooms, etc.).
        Users can cancel bookings.

## Technologies Used

    Backend: Node.js, Express, TypeScript
    Frontend: EJS (Embedded JavaScript) for rendering HTML views
    Database: In-memory data (for simplicity)
    Unit Testing: Jest, Supertest
    Docker (Optional): To containerize the application

## Prerequisites

Before you start, make sure you have the following installed:

    Node.js (v20+)
    npm (v8+)
    Docker (Optional, for containerization)

## Clone the repository

```
    > git clone https://github.com/your-username/hotel-booking-app.git
    > cd hotel-booking-app
```

## Install dependencies

Run the following command to install the required dependencies:

```
    > npm install
```

## Set up the TypeScript configuration

The project uses TypeScript. If you need to regenerate the tsconfig.json file, you can do so by running:

```
    > npx tsc --init
```

## Run the application

You can start the application by running:

```
    > npx tsc && node dist/app.js
```
The server will start on http://localhost:3000.

Alternatively, you can use ts-node to run it directly without compiling:

```
    > npx ts-node src/app.ts
```

## (Optional) Run with Docker

If you have Docker installed and want to run the app in a container, use the following steps:

Build the Docker image:

```
    > docker build -t hotel-booking-app .
```

## Run the container:

```
    > docker run -p 3000:3000 hotel-booking-app
```

The app should now be available at http://localhost:3000.

## API Endpoints

1. Get all hotels

    URL: /api/hotels
    Method: GET
    Query Parameters:
        location: Filter hotels by location.
    Response:

    [
      {
        "id": 1,
        "name": "Hotel A",
        "location": "New York",
        "rooms": 10
      },
      {
        "id": 2,
        "name": "Hotel B",
        "location": "San Francisco",
        "rooms": 5
      }
    ]

2. Create a new booking

    URL: /api/bookings
    Method: POST
    Request Body:

    {
        "userId": 1,
        "hotelId": 1,
        "roomsBooked": 2,
        "checkIn": "2025-02-20",
        "checkOut": "2025-02-25"
    }

Response:
    {
      "userId": 1,
      "hotelId": 1,
      "roomsBooked": 2,
      "checkIn": "2025-02-20",
      "checkOut": "2025-02-25"
    }

3. Get all bookings

    URL: /api/bookings
    Method: GET
    Response:

    [
      {
        "userId": 1,
        "hotelId": 1,
        "roomsBooked": 2,
        "checkIn": "2025-02-20",
        "checkOut": "2025-02-25"
      }
    ]

4. Modify a booking

    URL: /api/bookings/{id}
    Method: PUT
    Request Body:

    {
        "checkIn": "2025-02-22",
        "checkOut": "2025-02-26",
        "roomsBooked": 3
    }

Response:
    {
      "userId": 1,
      "hotelId": 1,
      "roomsBooked": 3,
      "checkIn": "2025-02-22",
      "checkOut": "2025-02-26"
    }

5. Cancel a booking

    URL: /api/bookings/{id}
    Method: DELETE
    Response:
    {
      "message": "Booking cancelled successfully"
    }

## Testing

The project includes unit tests to validate API functionality.

1. Run tests

To run the unit tests, you can use the following command:

```
    > npm test
```

The tests use Jest and Supertest for API testing.

2. Writing Tests

Tests are located in the src/tests/ directory. Add new tests for API endpoints, validation, and business logic there.