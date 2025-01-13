// controllers/vendorController.js

const vendors = require('../data/vendorData');

const getVendors = (req, res) => {
  const { location, service } = req.query;
  let filteredVendors = vendors;
   
   
  if (location) {
    filteredVendors = filteredVendors.filter(vendor =>
      vendor.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (service) {
    filteredVendors = filteredVendors.filter(vendor =>
      vendor.services.some(s => s.toLowerCase().includes(service.toLowerCase()))
    );
  }

  res.json(filteredVendors);
};

module.exports = { getVendors };
