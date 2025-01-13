// routes/vendorRoutes.js

const express = require('express');
const { getVendors } = require('../models/Vendor');

const router = express.Router();

// Route to fetch vendors
router.get('/vendors', getVendors);

module.exports = router;
