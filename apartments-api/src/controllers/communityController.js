
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Community = require('../models/community');


exports.gethealthStatus= async function(req, res,next) {
  const returnval="Apartment Service Running...";
    res.status(200).send( returnval);
}

exports.valitateToken= async function(req, res,next) {
  const token=req.params.token;
  let community;
  try{
    community=await Community.findOne({'token':token});
    console.log(community);
    if(community==null)
    {
      const returnval=`token '${token}' not found`;
      res.status(404).send( returnval);
    }
}
catch (err) {
    const error = new HttpError(
      `Something went wrong, could not find a token- ${token}`,
      500
    );
    return next(error);
  }

  
  const returnval=`token '${token}' found`;
  res.status(200).json(community.toObject({ getters: true }) );

}
exports.community_list = async function(req, res,next) {

    let communities,count;
    try {
        communities = await Community.find();
        count = await Community.find().countDocuments();
    } catch (err) {
      const error = new HttpError(
        'Fetching communities failed, please try again later.',
        500
      );
      return next(error);
    }
  

    res.json({count: count, communities: communities.map(community => community.toObject({ getters: true }))});
};

exports.editCommunityDetails= async function(req, res,next) {
  const communityid=req.params.id;
  
    const filter={_id:communityid};
    const update=req.body;
    let community;
    try{
      community=await Community.findOneAndUpdate(filter, update, {
        new: true
      });
      
    }
  catch (err) {
      const error = new HttpError(
        `Something went wrong, could not edit a community- ${communityid}`,
        500
      );
      return next(error);
    }

    
if (!community) {
  const error = new HttpError(
    'Could not find a community for the provided id.',
    404
  );
  return next(error);
}  
res.json(community.toObject({ getters: true }) );
}
exports.getCommunityById = async function(req, res,next) {
    const communityid=req.params.id;
    let community;
    try{
        community=await Community.findById(communityid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find a community- ${communityid}`,
          500
        );
        return next(error);
      }

      
  if (!community) {
    const error = new HttpError(
      'Could not find a community for the provided id.',
      404
    );
    return next(error);
  }  
  res.json(community.toObject({ getters: true }) );

};



exports.createCommunity =async function(req, res,next) 
{
 
  console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }

   const community=new Community(req.body);
   community.save();
   res.status(201).json({ community });
};

exports.addBlocksInCommunity=async function(req,res,next){
    var blocks = req.body; 
    var communityid = req.params.id;
    let  community;
    try{
         community=await Community.findById(communityid);
        const sess = await mongoose.startSession();
        sess.startTransaction();
        blocks.map(block =>{
            community.blockdetails.push(block);

        }
            );
       // community.models=community.modeldetails.count
        await community.save({ session: sess });
        await sess.commitTransaction();
    }
    catch (err) {
        console.log(err);
        const error = new HttpError(
          `Something went wrong, could not update a community- ${communityid}`,
          500
        );
        return next(error);
      }
     
    res.status(200).send({community});

}
exports.getBlocksInCommunity=async function(req,res,next){
    const communityid=req.params.id;
    let blocks,community,count;
    try{
        communities=await Community.findOne({'_id':communityid}).populate('blockdetails');
       // console.log(communities);
      
       // count=await Community.find({'_id':communityid}).blockdetails.countDocuments();
       count=0;
        
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not fetch block details for  community- ${communityid}`,
          500
        );
        return next(error);
      }

      
  if (!communities ) {
    const error = new HttpError(
      ' could not fetch block details of  community for the provided id.',
      404
    );
    return next(error);
  }  

  res.json({communityid:communityid,blocks: communities.blockdetails.map(block =>
    block.toObject({ getters: true })
)});

}
exports.addFloorsInCommunity=async function(req,res,next){
    var updateObject = req.body; 
    var communityid = req.params.id;
    
    let  community;
    try{
         community=await Community.findById(communityid);
         community.floors.push(updateObject);
        
    }
    catch (err) {
        console.log(err);
        const error = new HttpError(
          `Something went wrong, could not update a community- ${communityid}`,
          500
        );
        return next(error);
      }
     
    res.status(200).send({community});

}


exports.addApartmentModelInCommunity=async function(req,res,next){
    var aptmodels = req.body; 
    var communityid = req.params.id;
    let  community;
    try{
        community=await Community.findById(communityid);
        const sess = await mongoose.startSession();
        sess.startTransaction();
        
        community.modeldetails.push(aptmodels);
       // community.models=community.modeldetails.count
        await community.save({ session: sess });
        await sess.commitTransaction();
    }
    catch (err) {
        console.log(err);
        const error = new HttpError(
          `Something went wrong, could not update a community- ${communityid}`,
          500
        );
        return next(error);
      }
     
    res.status(200).send({community});

}
exports.getApartmentModelsInCommunitybyName=async function(req,res,next){
    const communityid=req.body.communityid;
    const modelName=req.body.modelname;
    let modeltoReturn;
    try{
        communities=await Community.findOne({'_id':communityid}).populate('modeldetails');
       // console.log(communities);
      
       // count=await Community.find({'_id':communityid}).blockdetails.countDocuments();
       count=0;
        
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not fetch block details for  community- ${communityid}`,
          500
        );
        return next(error);
      }

      
  if (!communities ) {
    const error = new HttpError(
      ' could not fetch block details of  community for the provided id.',
      404
    );
    return next(error);
  }  

  communities.modeldetails.forEach(model =>
     {

        if(model.name===modelName)
        {
            modeltoReturn=model;
        }
    });
  res.json({communityid:communityid,model: modeltoReturn});

}
exports.getApartmentModelsInCommunity=async function(req,res,next){
    const communityid=req.params.id;
    let count;
    try{
        communities=await Community.findOne({'_id':communityid}).populate('modeldetails');
       // console.log(communities);
      
       // count=await Community.find({'_id':communityid}).blockdetails.countDocuments();
       count=0;
        
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not fetch block details for  community- ${communityid}`,
          500
        );
        return next(error);
      }

      
  if (!communities ) {
    const error = new HttpError(
      ' could not fetch block details of  community for the provided id.',
      404
    );
    return next(error);
  }  

  res.json({communityid:communityid,models: communities.modeldetails.map(model =>
    model.toObject({ getters: true })
)});

}

