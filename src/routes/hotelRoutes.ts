import { Router, Request, Response } from 'express';
import { getHotels } from '../controllers/hotelController';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  getHotels(req, res);  // Ensure the `getHotels` function is properly typed.
});

export { router as hotelRoutes };
