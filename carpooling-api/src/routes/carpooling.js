var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var carpooling_Controller = require('../controllers/carpoolingController');
router.get('/api/carpoolings/health-status',carpooling_Controller.gethealthStatus);

router.post('/api/carpoolings',carpooling_Controller.getcarpoolings); 
router.get('/api/carpoolings/:cid',carpooling_Controller.getcarpoolingById); 


router.post('/api/carpoolings/create',carpooling_Controller.createCarpooling); 
module.exports = router;