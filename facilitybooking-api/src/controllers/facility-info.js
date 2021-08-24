
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const facilityInfo = require('../models/facility-info');
const facilitybookingInfo = require('../models/facility-booking-info');

exports.gethealthStatus= async function(req, res,next) {
    const returnval="Facility booking service running...";
      res.status(200).send( returnval);
  }

exports.getFacilities = async function(req, res,next) {
}

exports.getFacility = async function(req, res,next) {
}


exports.createFacility = async function(req, res,next) {
}


exports.editFacility = async function(req, res,next) {
}

exports.bookFacility = async function(req, res,next) {
}

exports.cancelFacilityBooking = async function(req, res,next) {
}

exports.deleteFacility = async function(req, res,next) {
}