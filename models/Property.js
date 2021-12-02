/**
 * Property Schema
 */
const mongoose = require('mongoose');
mongoose.set('debug', true);

const propertySchema = new mongoose.Schema({
    propertyId: {
        type: Number,
        unique: true,
        required: true,
    },
    propertyName: {
        type: String,
        unique: true,
        required: true,
    },
    income: {
        type: Object,
        required: true,
    },
    expense: {
        type: Object,
        required: true,
    },
});

module.exports = mongoose.model('Property', propertySchema);
