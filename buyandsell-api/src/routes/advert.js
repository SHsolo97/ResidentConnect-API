var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var advert_Controller = require('../controllers/advertController');
router.get('/api/adverts/health-status',advert_Controller.gethealthStatus);
router.get('/api/adverts/categories',advert_Controller.getCategories);
router.post('/api/adverts/subcategories',advert_Controller.getSubCategories);
router.post('/api/adverts/categories/create',advert_Controller.createCategory);
router.post('/api/adverts/subcategories/create',advert_Controller.createSubCategory);


router.get('/api/adverts',advert_Controller.getAdsList); //done
router.get('/api/adverts/:aid',advert_Controller.getAdById); //done
router.delete('/api/adverts/:aid',advert_Controller.deleteAdById); 

router.post('/api/adverts/',advert_Controller.getAds); //different search bycity, by distance

router.post('/api/adverts/create',advert_Controller.createAd); //done
module.exports = router;