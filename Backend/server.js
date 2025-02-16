// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/moveinsync', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Import routes
const routesRouter = require('./Route');
const bookingsRouter = require('./Booking');
const driversRouter = require('./Driver');

// Use routes
app.use('/api/routes', routesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/drivers', driversRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// models/Route.js
const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    startLocation: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Route', routeSchema);

// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    bookingId: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    startLocation: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    pickupTime: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['requested', 'accepted', 'declined', 'completed'],
        default: 'requested'
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Booking', bookingSchema);

// models/Driver.js
const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'on_trip', 'offline'],
        default: 'active'
    }
});

module.exports = mongoose.model('Driver', driverSchema);
