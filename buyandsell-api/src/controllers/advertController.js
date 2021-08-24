

const { validationResult } = require('express-validator');
const axios = require ('axios');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Advert = require('../models/advert');



exports.gethealthStatus= async function(req, res,next) {
  const returnval="Advert service running...";
    res.status(200).send( returnval);
}

exports.getAdsList= async function(req, res,next) {

    let ads,count;
    try {
        ads = await Advert.find();
        count = await Advert.find().countDocuments();
    } catch (err) {
      const error = new HttpError(
        'Fetching advertisements failed, please try again later.',
        500
      );
      return next(error);
    }
  

    res.json({count: count, ads: ads.map(ad => ad.toObject({ getters: true }))});
}

exports.getAdById= async function(req, res,next) {
    const adid=req.params.aid;
    let advert;
    try{
        advert=await Advert.findById(adid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find a advertisement- ${adid}`,
          500
        );
        return next(error);
      }

      
  if (!advert) {
    const error = new HttpError(
      'Could not find a advertisement for the provided id.',
      404
    );
    return next(error);
  }  
  res.json(advert.toObject({ getters: true }) );
}

/*exports.getAdsByCommunityId= async function(req, res,next) {
    const communityid=req.params.cid;


    let adverts,count;
    try {
        adverts = await Advert.find({'communityid':communityid});
        count = await Advert.find({'communityid':communityid}).countDocuments();
    } catch (err) {
      const error = new HttpError(
        `Fetching advertisements failed for community ${communityid},  please try again later.`,
        500
      );
      return next(error);
    }
  

    res.json({count: count, adverts: adverts.map(ad => ad.toObject({ getters: true }))});
}*/

exports.getAds= async function(req, res,next) {
}

exports.createAd= async function(req, res,next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }

   const advert=new Advert(req.body);
   advert.save();
   res.status(201).json(advert);
}
