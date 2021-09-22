

const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Polling = require('../models/polling-info');


exports.gethealthStatus= async function(req, res,next) {
    const returnval="Polling service running...";
      res.status(200).send( returnval);
  }



//router.get('/api/community/:id/pollings',pollinginfo_Controller.getPollingsbyCommunityId);
exports.getPollings = async function(req, res,next) {
   
  let polls,count;
   
    try {
      polls = await Polling.find(req.body);
        count = await Polling.find(req.body).countDocuments();
    } catch (err) {
      const error = new HttpError(
        `Fetching polls failed,  please try again later.`,
        500
      );
      return next(error);
    }
       res.json({count: count, polls: polls.map(poll => poll.toObject())});
}

//router.post('/api/community/:id/polling/create',pollinginfo_Controller.createPolling);
exports.createPolling = async function(req, res,next) {
   
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }

 const polling=new Polling(req.body);
 polling.save();
 res.status(201).json({ polling });
}
//router.get('/api/community/:id/polling/:pid',pollinginfo_Controller.getPolling);
exports.getPolling = async function(req, res,next) {
   
  const pid=req.params.pid;
  let poll;
  try{
      poll=await Polling.findById(pid)
  }
  catch (err) {
      const error = new HttpError(
        `Something went wrong, could not find a poll- ${pid}`,
        500
      );
      return next(error);
    }

    
if (!poll) {
  const error = new HttpError(
    'Could not find a poll for the provided id.',
    404
  );
  return next(error);
}  
res.json(poll.toObject() );
}
//router.put('/api/community/:id/polling/:pid',pollinginfo_Controller.updatePolling);
exports.updatePolling = async function(req, res,next) {
   
  const pid=req.params.pid;


  const filter={
    _id:pid,
    'options._id':req.body.optionid};
  
  const update = {
    $set:{'totalvotes':req.body.totalvotes,
      'options.$.votes':req.body.selectedoptionvotes },
    $push: {'answeredby':req.body.answeredby},
}
  let poll;
  try{
    poll=await Polling.findOneAndUpdate(filter, update,
      {new: true}
    );
    poll=await Polling.findOneAndUpdate(filter,{
      
       update}
       , {
      new: true
    });
    
  }
catch (err) {
  console.log(err);
    const error = new HttpError(
      `Something went wrong, could not edit a poll- ${pid}`,
      500
    );
    return next(error);
  }

  
if (!poll) {
const error = new HttpError(
  'Could not find a poll for the provided id.',
  404
);
return next(error);

} 

res.status(200).json(poll.toObject() );

}