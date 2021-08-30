


const { validationResult } = require('express-validator');
const axios = require ('axios');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const announcementInfo = require('../models/announcement-info');

exports.gethealthStatus= async function(req, res,next) {
    const returnval="Announcement service running...";
      res.status(200).send( returnval);
  }
exports.getAnnouncements= async function(req, res,next) {
}


//router.get('/api/community/:cid/announcements/:aid',advert_Controller.getAnnouncementbyId);
exports.getAnnouncementbyId= async function(req, res,next) {
}

//router.post('/api/community/:cid/announcements/create',advert_Controller.createAnnouncement);
exports.createAnnouncement= async function(req, res,next) {
}