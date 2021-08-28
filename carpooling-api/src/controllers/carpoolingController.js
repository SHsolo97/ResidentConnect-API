const { validationResult } = require('express-validator');
const axios = require ('axios');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Carpoooling = require('../models/carpooling-info');




//router.get('/api/community/:cid/carpoolings',carpooling_Controller.getcarpoolingList); 
exports.getcarpoolingList= async function(req, res,next) {
}

//router.get('/api/community/:cid/carpolling/:cid',carpooling_Controller.getcarpoolingById); 
exports.getcarpoolingById= async function(req, res,next) {
}

//router.post('/api/community/:cid/carpollings',carpooling_Controller.getcarpoolingsByTags); 
exports.getcarpoolingsByTags= async function(req, res,next) {
}

//router.post('/api/carpooling/create',carpooling_Controller.createCarpooling); 
exports.createCarpooling= async function(req, res,next) {
}
