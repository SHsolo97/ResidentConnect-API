var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var advert_Controller = require('../controllers/advertController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/api/adverts/docs', swaggerUi.serve);
router.get('/api/adverts/docs', swaggerUi.setup(swaggerDocument));

router.get('/api/adverts/health-status',advert_Controller.gethealthStatus);
router.get('/api/adverts/categories',advert_Controller.getCategories);
router.post('/api/adverts/subcategories',advert_Controller.getSubCategories);
router.post('/api/adverts/search',advert_Controller.getAds); //different search bycity, by distance
router.get('/api/adverts/:aid',advert_Controller.getAdById); //done
router.delete('/api/adverts/:aid',advert_Controller.deleteAdById); 


router.post('/api/adverts/create',advert_Controller.createAd); //done
module.exports = router;