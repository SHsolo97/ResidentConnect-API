


const { validationResult } = require('express-validator');
const axios = require ('axios');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Announcement = require('../models/announcement-info');

exports.gethealthStatus= async function(req, res,next) {
    const returnval="Announcement service running...";
      res.status(200).send( returnval);
  }
exports.searchAnnouncements= async function(req, res,next) {
  let announcements,count;
   
  try {
    announcements = await Announcement.find(req.body);
      count = await Announcement.find(req.body).countDocuments();
  } catch (err) {
    const error = new HttpError(
      `Fetching announcements failed,  please try again later.`,
      500
    );
    return next(error);
  }
 


  res.json({count: count, announcements: announcements.map(announcement => user.toObject())});
}


//router.get('/api/community/:cid/announcements/:aid',advert_Controller.getAnnouncementbyId);
exports.getAnnouncementbyId= async function(req, res,next) {
  const announcementid=req.params.aid;
  let announcement;
  try{
    announcement=await Announcement.findById(announcementid)
  }
  catch (err) {
      const error = new HttpError(
        `Something went wrong, could not find a announcement- ${announcementid}`,
        500
      );
      return next(error);
    }

    
if (!announcement) {
  const error = new HttpError(
    `Could not find a announcement for the provided id.- ${announcementid}`,
    404
  );
  return next(error);
}  
res.json(announcement.toObject() );
}

//router.post('/api/community/:cid/announcements/create',advert_Controller.createAnnouncement);
exports.createAnnouncement= async function(req, res,next) {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }

   const announcement=new Announcement(req.body);
   announcement.save();
   res.status(201).json(announcement);
}