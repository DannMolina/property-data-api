/**
 * App router
 */
const express = require('express');
const router = express.Router();
const connectDb = require('./db/connection');

// * init db connection
connectDb();

// * provide available routes
const propertyRoute = require('./routes/property');

// * mounts
router.use('/api/public', propertyRoute);

module.exports = router;
