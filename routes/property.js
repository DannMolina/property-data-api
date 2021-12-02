/**
 * Property Routes
 */
const express = require('express');

const router = express.Router();
const PropertyController = require('../controllers/property');

// * Api endpoints
router.get('/properties', PropertyController.getProperties);
router.get('/property/:id', PropertyController.getProperty);

module.exports = router;
