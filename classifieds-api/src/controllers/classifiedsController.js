
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const Classifieds = require('../models/classifieds-info');
const Classifiedscomments= require('../models/classifieds-comments-info');
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

//router.get('/api/community/:id/classified/:cid',classifieds_controller.getclassifiedById);
exports.getclassifiedById = async function(req, res,next) {
   

}


//router.post('/api/community/:id/classifieds',contactinfo_controller.getclassifiedsByTags);
exports.getclassifieds = async function(req, res,next) {
   

}

//router.delete('/api/community/:id/classified/:cid',contactinfo_controller.deleteclassfieds);
exports.deleteclassfied = async function(req, res,next) {
   

}
//router.put('/api/community/:id/classified/:cid',contactinfo_controller.editclassfieds);
exports.editclassfied = async function(req, res,next) {
   

}

//router.post('/api/community/:id/classified/:cid',contactinfo_controller.addComment);
exports.addComment = async function(req, res,next) {
   

}
//router.deleteComment('/api/community/:id/classified/:cid/comment/:commentid',contactinfo_controller.deleteComment);
exports.deleteComment = async function(req, res,next) {
   

}

//router.put('/api/community/:id/classified/:cid/comment/:commentid',contactinfo_controller.editComment);
exports.editComment = async function(req, res,next) {
   

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
