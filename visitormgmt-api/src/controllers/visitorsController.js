const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const visitorsInfo = require('../models/visitors-info');


//router.get('/api/community/:id/apartment/:aid/vistors',visitors_Controller.getVisitorsByApartmentId);
exports.getVisitorsByApartmentId = async function(req, res,next) {
}

//router.post('/api/community/:id/apartment/:aid/visitor/create',visitors_Controller.createVisitor);
exports.createVisitor = async function(req, res,next) {
}

//router.get('/api/visitor/:vid',visitors_Controller.getvisitorById);
exports.getvisitorById = async function(req, res,next) {
}

//router.put('/api/visitor/:vid',visitors_Controller.editvisitor);
exports.editvisitor = async function(req, res,next) {
}

//router.delete('/api/visitor/:vid',visitors_Controller.deletevisitor);
exports.deletevisitor = async function(req, res,next) {
}

//router.post('/api/community/:id/apartment/:aid/vistors',visitors_Controller.searchVisitor);
exports.searchVisitor = async function(req, res,next) {
}
