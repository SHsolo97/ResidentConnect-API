
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Facility = require('../models/facility-info');
const FacilityBooking = require('../models/facility-booking-info');
const FaciltyType =require('../models/facility-type-info');


exports.gethealthStatus= async function(req, res,next) {
    const returnval="Facility booking service running...";
      res.status(200).send( returnval);
  }

  exports.getFacilityTypes = async function(req, res,next) {
    let facilityTypes,count;
  try {
    facilityTypes = await FaciltyType.find();
      count = await FaciltyType.find().countDocuments();
  } catch (err) {
    const error = new HttpError(
      'Fetching facility type failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({count: count, facilityTypes: facilityTypes.map(type => type.toObject({ getters: true }))});
  }
  
  exports.createFacilityType = async function(req, res,next) {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }

   const facility=new FaciltyType(req.body);
   facility.save();
   res.status(201).json({ facility });

  }
  
exports.getFacilities = async function(req, res,next) {
  let facilities,count;
   
  try {
      facilities = await Facility.find(req.body);
      count = await Facility.find(req.body).countDocuments();
  } catch (err) {
    const error = new HttpError(
      `Fetching facilities failed,  please try again later.`,
      500
    );
    return next(error);
  }
 


  res.json({count: count, facilities: facilities.map(facility => facility.toObject())});
}

exports.getFacilityById = async function(req, res,next) {
  const facilityid=req.params.fid;
    let facility;
    try{
        facility=await Facility.findById(facilityid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find a facility- ${facilityid}`,
          500
        );
        return next(error);
      }

      
  if (!facility) {
    const error = new HttpError(
      'Could not find a facility for the provided id.',
      404
    );
    return next(error);
  }  
  res.json(facility.toObject() );
}


exports.createFacility = async function(req, res,next) {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }

 const facility=new Facility(req.body);
 facility.save();
 res.status(201).json({ facility });
 

}


exports.editFacility = async function(req, res,next) {
}

exports.bookFacility = async function(req, res,next) {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }

 const booking=new FacilityBooking(req.body);
 booking.save();
 res.status(201).json({ booking });
}

exports.cancelFacilityBooking = async function(req, res,next) {
}

exports.searchFacilityBooking  = async function(req, res,next) {
  let bookings,count;
   
  try {
    bookings = await FacilityBooking.find(req.body);
      count = await FacilityBooking.find(req.body).countDocuments();
  } catch (err) {
    const error = new HttpError(
      `Fetching booking details failed,  please try again later.`,
      500
    );
    return next(error);
  }
 


  res.json({count: count, bookings: bookings.map(booking => booking.toObject())});
}

exports.deleteFacility = async function(req, res,next) {
}