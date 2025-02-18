"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotelRoutes = void 0;
const express_1 = require("express");
const hotelController_1 = require("../controllers/hotelController");
const router = (0, express_1.Router)();
exports.hotelRoutes = router;
router.get('/', (req, res) => {
    (0, hotelController_1.getHotels)(req, res); // Ensure the `getHotels` function is properly typed.
});
