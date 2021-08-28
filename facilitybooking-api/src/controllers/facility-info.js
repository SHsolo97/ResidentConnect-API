
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const facilityInfo = require('../models/facility-info');
const facilitybookingInfo = require('../models/facility-booking-info');


//router.get('/api/community/:id/facility',facility_controller.getFacilitybyCommunityId);
exports.getFacilitybyCommunityId = async function(req, res,next) {
}

//router.post('/api/community/:id/facility/create',facility_controller.createFacility);
exports.createFacility = async function(req, res,next) {
}

//router.put('/api/community/:id/facility/:fid',facility_controller.editFacility);
exports.editFacility = async function(req, res,next) {
}

//router.patch('/api/community/:id/facility/:fid',facility_controller.bookFacility);
exports.bookFacility = async function(req, res,next) {
}

//router.patch('/api/community/:id/facility/:fid',facility_controller.cancelFacilityBooking);
exports.cancelFacilityBooking = async function(req, res,next) {
}

//router.delete('/api/community/:id/facility/:fid',facility_controller.deleteFacility);
exports.deleteFacility = async function(req, res,next) {
}