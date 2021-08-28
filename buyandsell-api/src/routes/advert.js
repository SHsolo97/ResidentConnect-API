var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var advert_Controller = require('../controllers/advertController');

router.get('/api/adverts',advert_Controller.getAdsList); //done
router.get('/api/advert/:aid',advert_Controller.getAdById); //done
router.get('/api/community/:cid/adverts',advert_Controller.getAdsByCommunityId); //done

router.post('/api/adverts/',advert_Controller.getAds); //different search bycity, by distance

router.post('/api/advert/create',advert_Controller.createAd); //done
module.exports = router;