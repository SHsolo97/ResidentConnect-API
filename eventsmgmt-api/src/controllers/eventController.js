

const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Event = require('../models/event');


//get
exports.getEventById = async function(req, res,next) {
    const eventid=req.params.eid;

}

//post
exports.getEvents = async function(req, res,next) {
    const searchcritera=req.body;
}


//put
exports.editEvent = async function(req, res,next) {
    const eventid=req.params.eid;
}

//delete
exports.deleteEvent = async function(req, res,next) {
    const eventid=req.params.eid;

}


//post
exports.createEvent = async function(req, res,next) {
  
}

//patch
exports.enrollToEvent = async function(req, res,next) {
    const eventid=req.params.eid;

}

//patch
exports.unEnrollToEvent = async function(req, res,next) {
    const eventid=req.params.eid;

}
