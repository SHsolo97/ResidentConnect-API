
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const classifiedsInfo = require('../models/classifieds-info');
const classifiedscommentsInfo = require('../models/classifieds-comments-info');





//router.post('/api/community/:id/classified/create',classifieds_controller.createClassfied);
exports.createClassfied = async function(req, res,next) {
   

}
//router.get('/api/community/:id/classifieds',contactinfo_controller.getclassifiedsByCommunityId);
exports.getclassifiedsByCommunityId = async function(req, res,next) {
   

}

//router.post('/api/community/:id/classifieds',contactinfo_controller.getclassifiedsByTags);
exports.getclassifiedsByTags = async function(req, res,next) {
   

}

//router.delete('/api/community/:id/classified/:cid',contactinfo_controller.deleteclassfieds);
exports.deleteclassfieds = async function(req, res,next) {
   

}
//router.put('/api/community/:id/classified/:cid',contactinfo_controller.editclassfieds);
exports.editclassfieds = async function(req, res,next) {
   

}

//router.post('/api/community/:id/classified/:cid',contactinfo_controller.addComment);
exports.addComment = async function(req, res,next) {
   

}
//router.deleteComment('/api/community/:id/classified/:cid/comment/:commentid',contactinfo_controller.deleteComment);
exports.deleteComment = async function(req, res,next) {
   

}

//router.put('/api/community/:id/classified/:cid/comment/:commentid',contactinfo_controller.editComment);
exports.editComment = async function(req, res,next) {
   

}