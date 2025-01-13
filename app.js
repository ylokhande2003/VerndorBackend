

const express = require('express');
const cors = require('cors');
const vendorRoutes = require('./routes/vendorRoutes');

const app = express();

// Middleware
app.use(cors());
// app.use(express.json());

// Routes
app.use('/api', vendorRoutes);

module.exports = app;
