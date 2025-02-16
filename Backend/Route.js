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