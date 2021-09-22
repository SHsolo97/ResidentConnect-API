const { validationResult } = require('express-validator');
const m2s = require('mongoose-to-swagger');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Apartment = require('../models/apartment');

const Community = require('../models/community');

exports.getSwaggerSchema= async function(req, res,next) {
  const swaggerSchema = m2s(Apartment);
  console.log(swaggerSchema);
    res.status(200).send( swaggerSchema);
}

exports.valitateToken=async function(req, res,next) {
  const token=req.params.token;
  let apartment;
  try{
    apartment=await Apartment.findOne({'token':token});
    console.log(apartment);
    if(apartment==null)
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
  res.status(200).json(apartment.toObject({ getters: true }) );
}

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
exports.apartments_search = async function(req, res,next) {

  let apartments,count;
   
  try {
      apartments = await Apartment.find(req.body);
      count = await Apartment.find(req.body).countDocuments();
  } catch (err) {
    const error = new HttpError(
      `Fetching apartments failed,  please try again later.`,
      500
    );
    return next(error);
  }
 


  res.json({count: count, apartments: apartments.map(apartment => apartment.toObject())});

  
};


exports.apartment_details = async function(req, res,next) {
    const apartmentid=req.params.apartmentid;  
    let apartment;
    try{
        apartment=await Apartment.findById(apartmentid);
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
      const communityid=req.body.communityid
       const apartment=new Apartment(req.body);
     
      let query;
     try{
          const sess = await mongoose.startSession();
        sess.startTransaction();
        //console.log(community);
        query=await Community.findOne({'_id':communityid,'blockdetails.block':apartment.block}).populate('blockdetails');
        //console.log(blocks);
        if(query===null)
        {

            const error = new HttpError(
                `Block ${apartment.block} is not defined in community ${communityid}. please add block first.`,
                500
              );
              return next(error);
        }
         query=await Community.findOne(
              {'_id':communityid,'blockdetails.block':apartment.block,'blockdetails.floordetails.floor':{ $exists : true, $not : null } ,'blockdetails.floordetails.floor':apartment.floor});

        
        //,);
        if(!query)
        {
            console.log("floor=null");
            console.log(query);
            await Community.updateOne(
                { '_id': communityid, 'blockdetails.block':apartment.block},
                {
                    '$push': {
                        'blockdetails.$.floordetails' : {'floor':apartment.floor,'flats': [apartment]}

                    }
                }
            ).exec();
           
           // floor.floordetails.flats.push(apartment);
             
        }
        else
        {
            console.log("floor!=null");

            console.log(query);
          //  floor.floordetails.push({floor:apartment.floor,flats:[apartment]});
          await Community.findOneAndUpdate(
            { '_id': communityid,'blockdetails.block':apartment.block,'blockdetails.floordetails.floor':apartment.floor},
            {
                '$push': {
                    'blockdetails.$[outer].floordetails.$[inner].flats': apartment}
            },
                     
            {'arrayFilters': [{'outer.block': apartment.block}, {'inner.floor': apartment.floor}]}
            
           
            
        ).exec();
        
            
        }
        await apartment.save({ session: sess });
        await sess.commitTransaction();
     }
     catch (err) {
         console.log(err);
        const error = new HttpError(
          `Something went wrong, could not create a apartment in- ${communityid}`,
          500
        );
        return next(error);
      }
   res.status(201).json({ apartment });

};

exports.getSummary= async function(req, res,next) {
   

  Apartment.aggregate([
      {$match:{"communityid": new mongoose.Types.ObjectId(req.body.communityid)}}, 
      {
          $group:
          {
              _id: { status: "$status" },
              total: { $sum: 1 },
          }
      }
  ])
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
        const error = new HttpError(
          `Something went wrong,`,
          500
        );
        return next(error);
      })

}
exports.apartment_update = async function(req, res) {
    const apartmentid=req.params.apartmentid;
  
    const filter={_id:apartmentid};
    const update=req.body;
    let apartment;
    try{
      apartment=await Apartment.findOneAndUpdate(filter, update, {
        new: true
      });
      
    }
  catch (err) {
      const error = new HttpError(
        `Something went wrong, could not edit a apartment- ${apartmentid}`,
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
    res.status(400).send({});

  }
  
res.json(apartment.toObject({ getters: true }) );
}
/*exports.addUserToApartment = async function(req, res,next) {
    const aptid=req.params.apartmentid;  
    const userid=req.body.userid;  

    let apartment;
    try{
        apartment=await Apartment.findById(aptid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find a Apartment- ${aptid}`,
          500
        );
        return next(error);
      }

      
  if (!apartment) {
    const error = new HttpError(
      'Could not find a apartment for the provided id.  ${aptid}',
      404
    );
    return next(error);
  } 
  
  
 
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
  
    apartment.enrolledby.push(userid);
    await apartment.save({ session: sess });
    
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Addding user to apartment failed, please try again.',
      500
    );
    return next(error);
  }

  
  res.json(apartment.toObject({ getters: true }) );
};


exports.removeUserFromApartment = async function(req, res,next) {
    const aptid=req.params.apartmentid;  
    const userid=req.body.userid;  

    let apartment;
    try{
        apartment=await Apartment.findById(aptid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find a Apartment- ${aptid}`,
          500
        );
        return next(error);
      }

      
  if (!apartment) {
    const error = new HttpError(
      'Could not find a apartment for the provided id.  ${aptid}',
      404
    );
    return next(error);
  } 
  
  
 
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
  
    apartment.enrolledby.pull(userid);
    await apartment.save({ session: sess });
    
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Removing user from apartment failed, please try again.',
      500
    );
    return next(error);
  }

  
  res.json(apartment.toObject({ getters: true }) );
};
*/