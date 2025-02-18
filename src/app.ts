import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { hotelRoutes } from './routes/hotelRoutes';
import { bookingRoutes } from './routes/bookingRoutes';
import { hotels } from './models/hotelModel';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set the views directory based on the environment
const viewsPath = path.join(__dirname, 'views');
app.set('views', viewsPath);

// Set the view engine (EJS in this case)
app.set('view engine', 'ejs');

// Routes
app.use('/api/hotels', hotelRoutes);
app.use('/api/bookings', bookingRoutes);

// Root route for rendering homepage
app.get('/', (req: Request, res: Response) => {
  res.render('index', {hotels});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
