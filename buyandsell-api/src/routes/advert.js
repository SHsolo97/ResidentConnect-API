var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var advert_Controller = require('../controllers/advertController');
router.get('/api/adverts/health-status',advert_Controller.gethealthStatus);

router.get('/api/adverts',advert_Controller.getAdsList); //done
router.get('/api/adverts/:aid',advert_Controller.getAdById); //done

router.post('/api/adverts/',advert_Controller.getAds); //different search bycity, by distance

router.post('/api/adverts/create',advert_Controller.createAd); //done
module.exports = router;