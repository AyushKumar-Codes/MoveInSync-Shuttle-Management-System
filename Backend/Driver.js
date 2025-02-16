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