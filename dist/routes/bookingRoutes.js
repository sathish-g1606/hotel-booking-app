"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoutes = void 0;
const express_1 = require("express");
const bookingController_1 = require("../controllers/bookingController");
const router = (0, express_1.Router)();
exports.bookingRoutes = router;
router.post('/', bookingController_1.createBooking);
router.get('/', bookingController_1.getBookings);
