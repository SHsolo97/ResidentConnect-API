const mongoose = require('mongoose');
const m2s = require('mongoose-to-swagger');
const Apartment = require('../models/apartment');

const swaggerSchema = m2s(Apartment);
console.log(swaggerSchema);