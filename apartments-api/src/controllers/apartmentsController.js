const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Apartment = require('../models/apartment');
const Community = require('../models/community');



exports.apartments_list = async function(req, res,next) {
    const communityid=req.params.communityid;
    //const data = await db.collection('apartments').find({"communityid": new ObjectId(communityid)}).toArray();
    //res.status(400).send(data);

    let apartments,count;
    try {
        apartments = await Apartment.find({'communityid':communityid});
        count = await Apartment.find({'communityid':communityid}).countDocuments();
    } catch (err) {
      const error = new HttpError(
        `Fetching apartments failed for community ${communityid},  please try again later.`,
        500
      );
      return next(error);
    }
  

    res.json({count: count, apartments: apartments.map(apartment => apartment.toObject({ getters: true }))});
};

exports.apartment_details = async function(req, res,next) {
    const communityid=req.params.communityid;
    const apartmentid=req.params.apartmentid;  
    let apartment;
    try{
        apartment=await Apartment.find({'communityid':communityid , '_id':apartmentid});
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find a apartment -${apartmentid} from community- ${communityid}`,
          500
        );
        return next(error);
      }

      
  if (!apartment) {
    const error = new HttpError(
      'Could not find a apartment for the provided id.',
      404
    );
    return next(error);
  }  
  res.json(apartment.toObject({ getters: true }) );

};


exports.apartment_create_post = async function(req, res,next) {
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }
      const communityid=req.params.communityid;  
      const apartment=new Apartment(req.body);
      apartment.communityid=communityid;
      const sess = await mongoose.startSession();
        sess.startTransaction();
        
        await apartment.save({ session: sess });
        await sess.commitTransaction();
    
   res.status(201).json({ apartment });

};
exports.apartment_update = async function(req, res) {
    const communityid=req.params.communityid;  
    res.status(400).send({});

};
