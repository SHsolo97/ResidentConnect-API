


const { validationResult } = require('express-validator');
const axios = require ('axios');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const announcementInfo = require('../models/announcement-info');


//router.get('/api/community/:cid/announcements',announcement_Controller.getAnnouncements);
exports.getAnnouncements= async function(req, res,next) {
}

//router.get('/api/community/:cid/announcements/active',announcement_Controller.getActiveAnnouncements);
exports.getActiveAnnouncements= async function(req, res,next) {
}

//router.get('/api/announcement/:aid',advert_Controller.getAnnouncementbyId);
exports.getAnnouncementbyId= async function(req, res,next) {
}

//router.post('/api/announcement/create',advert_Controller.createAnnouncement);
exports.createAnnouncement= async function(req, res,next) {
}