var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var carpooling_Controller = require('../controllers/carpoolingController');

router.get('/api/community/:cid/carpoolings',carpooling_Controller.getcarpoolingList); 
router.get('/api/community/:cid/carpolling/:cid',carpooling_Controller.getcarpoolingById); 

router.post('/api/community/:cid/carpollings',carpooling_Controller.getcarpoolingsByTags); 

router.post('/api/carpooling/create',carpooling_Controller.createCarpooling); 
module.exports = router;