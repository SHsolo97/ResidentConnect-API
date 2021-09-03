const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

 const ApartmentModel=require('../models/apartment-model');

 
//router.get('/api/community/:communityid/apartments/models',apartmentmodel_Controller.apartmentmodels_list);

exports.apartmentmodels_list = async function(req, res,next) {
    let models,count;
    let communityid=req.params.communityid;
    try {
        models = await ApartmentModel.find({'communityid':communityid})
        count = await ApartmentModel.find({'communityid':communityid}).countDocuments();
    } catch (err) {
      const error = new HttpError(
        'Fetching models failed, please try again later.',
        500
      );
      return next(error);
    }
  

    res.json({count: count, models: models.map(model => model.toObject({ getters: true }))});
}

//router.get('/api/community/:communityid/apartment/models/:modelid',apartmentmodel_Controller.getApartmentModel);
exports.getApartmentModel = async function(req, res,next) {
    const modelid=req.params.modelid;
    let model;
    try{
        model=await ApartmentModel.findById(modelid)
    }
    catch (err) {
        const error = new HttpError(
          `Something went wrong, could not find a apartment model- ${modelid}`,
          500
        );
        return next(error);
      }

      
  if (!model) {
    const error = new HttpError(
      'Could not find a apartment model for the provided id.',
      404
    );
    return next(error);
  }  
  res.json(model.toObject({ getters: true }) );  
}

//router.post('/api/community/:communityid/apartment/models/create',apartmentmodel_Controller.create_ApartmentModel);
exports.create_ApartmentModel = async function(req, res,next) {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }

   const model=new ApartmentModel(req.body);
   model.save();
   res.status(201).json({ model });

}

//router.put('/api/community/:communityid/apartment/models/:modelid', apartmentmodel_Controller.edit_ApartmentModel);
exports.edit_ApartmentModel = async function(req, res,next) {
    const modelid=req.params.modelid;
  
    const filter={_id:modelid};
    const update=req.body;
    let model;
    try{
        model=await ApartmentModel.findOneAndUpdate(filter, update, {
        new: true
      });
      
    }
  catch (err) {
      const error = new HttpError(
        `Something went wrong, could not edit a apartment model- ${modelid}`,
        500
      );
      return next(error);
    }

    
if (!model) {
  const error = new HttpError(
    'Could not find a apartment model for the provided id.',
    404
  );
  return next(error);
}  
res.json(model.toObject({ getters: true }) );

}
//router.delete('/api/community/:communityid/apartment/models/:modelid', apartmentmodel_Controller.delete_ApartmentModel);
exports.delete_ApartmentModel = async function(req, res,next) {
    const modelid=req.params.modelid;  
     let model;
  
     try {
         model=await ApartmentModel.findById(modelid).populate();
         model.remove();
        } catch (err) {
            console.log(err);
            const error = new HttpError(
              'Something went wrong, could not delete model.',
              500
            );
            return next(error);
          }
          if (!model) {
            const error = new HttpError('Could not find model for this id.', 404);
            return next(error);
          } 
       
       
        res.status(200).json({ message: 'Deleted model.' });
}  

