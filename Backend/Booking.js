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