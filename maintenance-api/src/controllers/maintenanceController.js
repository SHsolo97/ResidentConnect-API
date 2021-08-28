const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const maintenanceInfo = require('../models/maintenance-info');


//router.get('/api/community/:id/apartment/:aid/maintenancerequests',maintenance_Controller.getMaintenanceReqByApartmentId);
exports.getMaintenanceReqByApartmentId = async function(req, res,next) {
}

//router.post('/api/community/:id/apartment/:aid/maintenanceeRequest/create',maintenance_Controller.createMaintenanceReq);
exports.createMaintenanceReq = async function(req, res,next) {
}

//router.get('/api/maintenance/:mid',maintenance_Controller.getMaintenanceReqById);
exports.getMaintenanceReqById = async function(req, res,next) {
}

//router.put('/api/maintenance/:mid',maintenance_Controller.editMaintenanceReq);
exports.editMaintenanceReq = async function(req, res,next) {
}

//router.delete('/api/maintenance/:mid',maintenance_Controller.deleteMaintenanceReq);
exports.deleteMaintenanceReq = async function(req, res,next) {
}