const { validationResult } = require('express-validator');
const axios = require ('axios');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Ride = require('../models/ride-info');
const RideRequest = require('../models/riderequest-info');



exports.gethealthStatus= async function(req, res,next) {
    const returnval="carpooling service running...";
      res.status(200).send( returnval);
  }

//router.post('/api/carpoolings/rides/create',carpooling_Controller.createRide); 
  exports.createRide= async function(req, res,next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }

   const ride=new Ride(req.body);
   ride.save();
   res.status(201).json( ride );
  }
//router.post('/api/carpoolings/rides/search',carpooling_Controller.searchRides); 
exports.searchRides= async function(req, res,next) {
  let rides,count;
   
    try {
      rides = await Ride.find(req.body);
        count = await Ride.find(req.body).countDocuments();
    } catch (err) {
      const error = new HttpError(
        `Fetching rides failed,  please try again later.`,
        500
      );
      return next(error);
    }
   
 

    res.json({count: count, rides: rides.map(ride => ride.toObject())});
}
exports.filterRides= async function(req, res,next) {
  let rides,count;
  console.log(req.body);
  const seats=req.body.seats;
  const source=req.body.source;
  const destination=req.body.destination;
  const starttime=req.body.starttime;
  const endtime=req.body.endtime;

  const searchQuery={$and: [ 
    {'seats.available':{$gte: seats}},
    {stoppoints:source},
    {stoppoints:destination},
     {ridedatetime:{ '$gte': starttime, '$lte': endtime }}

  ]}
  
  // const searchQuery={$and: [ 
  //   {'$seats.available':{$gte: seats}},
  //   {$stoppoints:source},
  //   {$stoppoints:destination},
  //   {ridedatetime:{ '$gte': starttime, '$lte': endtime }}
  // ]}
  console.log(searchQuery);
    try {
      rides = await Ride.find(searchQuery);
        count = await Ride.find(searchQuery).countDocuments();
    } catch (err) {
      const error = new HttpError(
        `Searching rides failed,  please try again later.`,
        500
      );
      return next(error);
    }
   
 

    res.json({count: count, rides: rides.map(ride => ride.toObject())});
}

//router.get('/api/carpoolings/rides/:rideid',carpooling_Controller.getRideById); 
exports.getRideById= async function(req, res,next) {
  const rideid=req.params.rideid;
  let ride;
  try{
    ride=await Ride.findById(rideid)
  }
  catch (err) {
      const error = new HttpError(
        `Something went wrong, could not find a ride- ${rideid}`,
        500
      );
      return next(error);
    }

    
if (!ride) {
  const error = new HttpError(
    'Could not find a ride for the provided id.',
    404
  );
  return next(error);
}  
res.json(ride.toObject() );

}

//router.put('/api/carpoolings/rides/:rideid',carpooling_Controller.editRideById); 
exports.editRideById= async function(req, res,next) {
  const rideid=req.params.rideid;


    const filter={_id:rideid};
    const update=req.body;
    let ride;
    try{
      ride=await Ride.findOneAndUpdate(filter, update, {
        new: true
      });
      
    }
  catch (err) {
    console.log(err);
      const error = new HttpError(
        `Something went wrong, could not edit a ride- ${rideid}`,
        500
      );
      return next(error);
    }

    
if (!ride) {
  const error = new HttpError(
    'Could not find a ride for the provided id.',
    404
  );
  return next(error);
}  

res.status(200).json(ride.toObject() );
}

//router.delete('/api/carpoolings/rides/:rideid',carpooling_Controller.deleteRideById); 
exports.deleteRideById= async function(req, res,next) {
  const rideid=req.params.rideid;  
  let ride;

  try {
    ride=await Ride.findById(rideid).populate();
    ride.remove();
     } catch (err) {
         console.log(err);
         const error = new HttpError(
           'Something went wrong, could not delete ride.',
           500
         );
         return next(error);
       }
       if (!ride) {
         const error = new HttpError(`Could not find ride for this id. ${rideid}`, 404);
         return next(error);
       } 
    
    
     res.status(200).json({ message: 'Deleted ride.' });
}




//router.post('/api/carpoolings/riderequests/create',carpooling_Controller.raiseRideRequest);
exports.raiseRideRequest= async function(req, res,next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }

 const ridereq=new RideRequest(req.body);
 ridereq.save();
 res.status(201).json( ridereq );
}

//router.post('/api/carpoolings/riderequests/search',carpooling_Controller.searchRideRequest);
exports.searchRideRequest= async function(req, res,next) {
  let ridereqs,count;
   
    try {
      ridereqs = await RideRequest.find(req.body).populate('ride');
        count = await RideRequest.find(req.body).countDocuments();
    } catch (err) {
      const error = new HttpError(
        `Fetching ride requests failed,  please try again later.`,
        500
      );
      return next(error);
    }
   
 

    res.json({count: count, ridereqs: ridereqs.map(ridereq => ridereq.toObject())});
}

//router.get('/api/carpoolings/riderequests/:requestid',carpooling_Controller.getRideRequestById);
exports.getRideRequestById= async function(req, res,next) {
  const requestid=req.params.requestid;
  let ridereq;
  try{
    ridereq=await RideRequest.findById(requestid)
  }
  catch (err) {
      const error = new HttpError(
        `Something went wrong, could not find a ride request- ${requestid}`,
        500
      );
      return next(error);
    }

    
if (!ridereq) {
  const error = new HttpError(
    'Could not find a ride  request for the provided id.',
    404
  );
  return next(error);
}  
res.json(ridereq.toObject() );
}

//router.put('/api/carpoolings/riderequests/:requestid',carpooling_Controller.editRideRequestById);
exports.editRideRequestById= async function(req, res,next) {
  const requestid=req.params.requestid;


    const filter={_id:requestid};
    const update=req.body;
    let ridereq;
    try{
      ridereq=await RideRequest.findOneAndUpdate(filter, update, {
        new: true
      });
      
    }
  catch (err) {
    console.log(err);
      const error = new HttpError(
        `Something went wrong, could not edit a ride request- ${requestid}`,
        500
      );
      return next(error);
    }

    
if (!ridereq) {
  const error = new HttpError(
    'Could not find a ride request for the provided id.',
    404
  );
  return next(error);
}  

res.status(200).json(ridereq.toObject() );
}

//router.delete('/api/carpoolings/riderequests/:requestid',carpooling_Controller.deleteRideRequestById);
exports.deleteRideRequestById= async function(req, res,next) {
  const requestid=req.params.requestid;  
  let ridereq;

  try {
    ridereq=await RideRequest.findById(requestid).populate();
    ridereq.remove();
     } catch (err) {
         console.log(err);
         const error = new HttpError(
           'Something went wrong, could not delete ride request.',
           500
         );
         return next(error);
       }
       if (!ridereq) {
         const error = new HttpError(`Could not find ride  request for this id. ${requestid}`, 404);
         return next(error);
       } 
    
    
     res.status(200).json({ message: 'Deleted ride request.' });
}

