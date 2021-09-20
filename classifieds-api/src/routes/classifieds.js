var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var classifieds_controller = require('../controllers/classifiedsController');

router.get('/api/classifieds/categories',classifieds_controller.getCategories);
router.post('/api/classifieds/subcategories',classifieds_controller.getSubCategories);
router.get('/api/classifieds/health-status',classifieds_controller.gethealthStatus);

router.post('/api/classifieds/create',classifieds_controller.createClassfied);


router.post('/api/classifieds/search',classifieds_controller.getclassifieds);
router.delete('/api/classifieds/:cid',classifieds_controller.deleteclassified);
router.put('/api/classifieds/:cid',classifieds_controller.editclassified);

router.post('/api/classifieds/comment/create',classifieds_controller.addComment); //done
router.post('/api/classifieds/comments/search',classifieds_controller.getComments); //done
router.delete('/api/classifieds/comments/:commentid',classifieds_controller.deleteComment); //done
router.put('/api/classifieds/comments/:commentid',classifieds_controller.editComment);
router.post('/api/classifieds/categories/create',classifieds_controller.createCategory); //done
router.post('/api/classifieds/subcategories/create',classifieds_controller.createSubCategory); //done





module.exports = router;