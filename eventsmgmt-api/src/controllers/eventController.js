

const { validationResult } = require('express-validator');
const axios = require ('axios');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Event = require('../models/event');

exports.getEventsList= async function(req, res,next) {
    let events,count;
    try {
        events = await Event.find();
        count = await Event.find().countDocuments();
    } catch (err) {
      const error = new HttpError(
        'Fetching communities failed, please try again later.',
        500
      );
      return next(error);
    }
  

    res.json({count: count, events: events.map(event => event.toObject({ getters: true }))});
}

//get
exports.getEventById = async function(req, res,next) {
    const eventid=req.params.eid;
    let event;
    try{
        event=await Event.findById(eventid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find a event- ${eventid}`,
          500
        );
        return next(error);
      }

      
  if (!event) {
    const error = new HttpError(
      'Could not find a event for the provided id.',
      404
    );
    return next(error);
  }  
  res.json(event.toObject({ getters: true }) );
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }

   const event=new Event(req.body);
   event.save();
   res.status(201).json({ event });
}

//patch
exports.enrollToEvent = async function(req, res,next) {
    const eventid=req.params.eid;
    const userid=req.body.userid;
    let event;
 /************* Fetch event by id*************************** */
    try{
        event=await Event.findById(eventid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find a event- ${eventid}`,
          500
        );
        return next(error);
      }

      
  if (!event) {
    const error = new HttpError(
      'Could not find a event for the provided id.',
      404
    );
    return next(error);
  } 
  
  
 
  try {
  
    const sess = await mongoose.startSession();
    sess.startTransaction();  
    event.enrolledby.push(userid);
    await event.save({ session: sess });    
    await sess.commitTransaction();
  
    
   
  } catch (err) {
      console.log(err);
    const error = new HttpError(
      'enrolling user to event failed, please try again.',
      500
    );
    return next(error);
  }

 
  
  const body={eventid:event._id};
  
  axios.patch(`http://rc-eventsmgmt-srv:4002/api/user/${userid}/event/add`, body)
 .then(res => {}
 )
 .catch(err=>{
     //console.log(err);
     const error = new HttpError(
         'Something went wrong. event is not added in user object',
         500
       );
       return next(error);
 })

  
  res.json(event.toObject({ getters: true }) );
}

//patch
exports.unEnrollToEvent = async function(req, res,next) {
    const eventid=req.params.eid;
    const userid=req.body.userid;
    let event;
 /************* Fetch event by id*************************** */
    try{
        event=await Event.findById(eventid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find a event- ${eventid}`,
          500
        );
        return next(error);
      }

      
  if (!event) {
    const error = new HttpError(
      'Could not find a event for the provided id.',
      404
    );
    return next(error);
  } 
  
  
 
  try {
  
    const sess = await mongoose.startSession();
    sess.startTransaction();  
    event.enrolledby.pull(userid);
    await event.save({ session: sess });    
    await sess.commitTransaction();
  
    
   
  } catch (err) {
      console.log(err);
    const error = new HttpError(
      'un-enrolling user to event failed, please try again.',
      500
    );
    return next(error);
  }

 
  
  const body={eventid:event._id};
  
  axios.patch(`http://rc-eventsmgmt-srv:4002/api/user/${userid}/event/remove`, body)
 .then(res => {}
 )
 .catch(err=>{
     console.log(err);
     const error = new HttpError(
         'Something went wrong. event is not removed from user object',
         500
       );
       return next(error);
 })

  
  res.json(event.toObject({ getters: true }) );
}
