"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const hotelRoutes_1 = require("./routes/hotelRoutes");
const bookingRoutes_1 = require("./routes/bookingRoutes");
const hotelModel_1 = require("./models/hotelModel");
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Set the views directory based on the environment
const viewsPath = path_1.default.join(__dirname, 'views');
app.set('views', viewsPath);
// Set the view engine (EJS in this case)
app.set('view engine', 'ejs');
// Routes
app.use('/api/hotels', hotelRoutes_1.hotelRoutes);
app.use('/api/bookings', bookingRoutes_1.bookingRoutes);
// Root route for rendering homepage
app.get('/', (req, res) => {
    res.render('index', { hotels: hotelModel_1.hotels });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
exports.default = app;
