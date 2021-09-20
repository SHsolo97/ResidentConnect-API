
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Classifieds = require('../models/classifieds-info');
const ClassifiedsComment= require('../models/classifieds-comments-info');
const Category=require('../models/category-info')
const SubCategory=require('../models/subcategory-info');

exports.gethealthStatus= async function(req, res,next) {
    const returnval="classifieds service running...";
      res.status(200).send( returnval);
  }


//router.post('/api/community/:id/classified/create',classifieds_controller.createClassfied);
exports.createClassfied = async function(req, res,next) {
  console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }

   const classified=new Classifieds(req.body);
   classified.save();
   res.status(201).json({ classified });
   

}


//router.post('/api/community/:id/classifieds',contactinfo_controller.getclassifiedsByTags);
exports.getclassifieds = async function(req, res,next) {
   
  let classifieds,count;
  try {
    classifieds = await Classifieds.find(req.body);
      count = await Classifieds.find(req.body).countDocuments();
  } catch (err) {
    const error = new HttpError(
      `Fetching classifieds failed,  please try again later.`,
      500
    );
    return next(error);
  }
 


  res.json({count: count, classifieds: classifieds.map(classified => classified.toObject())});

}

//router.delete('/api/community/:id/classified/:cid',contactinfo_controller.deleteclassfieds);
exports.deleteclassified = async function(req, res,next) {
  const cid=req.params.cid;  
  let classified;

  try {
    classified=await Classifieds.findById(cid).populate();
    classified.remove();
     } catch (err) {
         console.log(err);
         const error = new HttpError(
           'Something went wrong, could not delete classified.',
           500
         );
         return next(error);
       }
       if (!classified) {
         const error = new HttpError('Could not find classified for this id.', 404);
         return next(error);
       } 
    
    
     res.status(200).json({ message: 'Deleted classified.' });

}
//router.put('/api/community/:id/classified/:cid',contactinfo_controller.editclassfieds);
exports.editclassified = async function(req, res,next) {
   

  const classifiedid=req.params.cid;


    const filter={_id:classifiedid};
    const update=req.body;
    let classified;
    try{
      classified=await Classifieds.findOneAndUpdate(filter, update, {
        new: true
      });
      
    }
  catch (err) {
    console.log(err);
      const error = new HttpError(
        `Something went wrong, could not edit a classified- ${classifiedid}`,
        500
      );
      return next(error);
    }

    
if (!classified) {
  const error = new HttpError(
    'Could not find a classified for the provided id.',
    404
  );
  return next(error);
}  

res.status(200).json(classified.toObject() );
}

//router.post('/api/community/:id/classified/:cid',contactinfo_controller.addComment);
exports.addComment = async function(req, res,next) {
   
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }

 const comment=new ClassifiedsComment(req.body);
 comment.save();
 res.status(201).json({ comment });
}


exports.getComments = async function(req, res,next) {
  let comments,count;
  try {
    comments = await ClassifiedsComment.find(req.body);
      count = await ClassifiedsComment.find(req.body).countDocuments();
  } catch (err) {
    const error = new HttpError(
      `Fetching classified's comments failed,  please try again later.`,
      500
    );
    return next(error);
  }
 


  res.json({count: count, comments: comments.map(comment => comment.toObject())});
}
//router.deleteComment('/api/community/:id/classified/:cid/comment/:commentid',contactinfo_controller.deleteComment);
exports.deleteComment = async function(req, res,next) {
  const commentid=req.params.commentid;  
  let comment;

  try {
    comment=await ClassifiedsComment.findById(commentid).populate();
    comment.remove();
     } catch (err) {
         console.log(err);
         const error = new HttpError(
           'Something went wrong, could not delete comment.',
           500
         );
         return next(error);
       }
       if (!comment) {
         const error = new HttpError('Could not find comment for this id.', 404);
         return next(error);
       } 
    
    
     res.status(200).json({ message: 'Deleted comment.' });

}

//router.put('/api/community/:id/classified/:cid/comment/:commentid',contactinfo_controller.editComment);
exports.editComment = async function(req, res,next) {
   
  const commentid=req.params.commentid;


  const filter={_id:commentid};
  const update=req.body;
  let comment;
  try{
    comment=await ClassifiedsComment.findOneAndUpdate(filter, update, {
      new: true
    });
    
  }
catch (err) {
  console.log(err);
    const error = new HttpError(
      `Something went wrong, could not edit a comment- ${commentid}`,
      500
    );
    return next(error);
  }

  
if (!comment) {
const error = new HttpError(
  'Could not find a comment for the provided id.',
  404
);
return next(error);
}  

res.status(200).json(comment.toObject() );
}

//router.get('/api/classifieds/categories',classifieds_controller.getCategories);

exports.getCategories = async function(req, res,next) {
  
  let categories,count;
  try {
    categories = await Category.find();
      count = await Category.find().countDocuments();
  } catch (err) {
    const error = new HttpError(
      'Fetching categoies failed, please try again later.',
      500
    );
    return next(error);
  }


  res.json({count: count, categories: categories.map(category => category.toObject({ getters: true }))});

}
//router.post('/api/classifieds/categories',classifieds_controller.getSubCategories);
exports.getSubCategories = async function(req, res,next) {
  let subcategories,count;
  let category=req.body.category;
  try {
    subcategories = await SubCategory.find({'category':category});
      count = await SubCategory.find({'category':category}).countDocuments();
  } catch (err) {
    const error = new HttpError(
      'Fetching categoies failed, please try again later.',
      500
    );
    return next(error);
  }


  res.json({count: count, subcategories: subcategories.map(subcategory => subcategory.toObject({ getters: true }))});

}
//router.post('/api/classifieds/categories/create',classifieds_controller.createCategory);
exports.createCategory = async function(req, res,next) {
  
  console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }

   const categoryObj=new Category(req.body);
   categoryObj.save();
   res.status(201).json({ categoryObj });

}
//router.post('/api/classifieds/subcategories/create',classifieds_controller.createSubCategory);
exports.createSubCategory = async function(req, res,next) {

  console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }

   const subcategoryObj=new SubCategory(req.body);
   subcategoryObj.save();
   res.status(201).json({ subcategoryObj });

}
