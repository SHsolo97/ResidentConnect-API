

const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const pollingInfo = require('../models/polling-info');


exports.gethealthStatus= async function(req, res,next) {
    const returnval="Polling service running...";
      res.status(200).send( returnval);
  }



//router.get('/api/community/:id/pollings',pollinginfo_Controller.getPollingsbyCommunityId);
exports.getPollings = async function(req, res,next) {
   

}

//router.post('/api/community/:id/polling/create',pollinginfo_Controller.createPolling);
exports.createPolling = async function(req, res,next) {
   

}
//router.get('/api/community/:id/polling/:pid',pollinginfo_Controller.getPolling);
exports.getPolling = async function(req, res,next) {
   

}
//router.put('/api/community/:id/polling/:pid',pollinginfo_Controller.updatePolling);
exports.updatePolling = async function(req, res,next) {
   

}