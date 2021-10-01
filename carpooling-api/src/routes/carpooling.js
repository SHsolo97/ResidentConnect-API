var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var carpooling_Controller = require('../controllers/carpoolingController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/api/carpoolings/docs', swaggerUi.serve);
router.get('/api/carpoolings/docs', swaggerUi.setup(swaggerDocument));

router.get('/api/carpoolings/health-status',carpooling_Controller.gethealthStatus);

router.post('/api/carpoolings/rides/create',carpooling_Controller.createRide); 
router.post('/api/carpoolings/rides/search',carpooling_Controller.searchRides); 
router.post('/api/carpoolings/rides/filter',carpooling_Controller.filterRides); 

router.get('/api/carpoolings/rides/:rideid',carpooling_Controller.getRideById); 
router.put('/api/carpoolings/rides/:rideid',carpooling_Controller.editRideById); 
router.delete('/api/carpoolings/rides/:rideid',carpooling_Controller.deleteRideById); 

router.post('/api/carpoolings/riderequests/create',carpooling_Controller.raiseRideRequest);
router.post('/api/carpoolings/riderequests/search',carpooling_Controller.searchRideRequest);
router.get('/api/carpoolings/riderequests/:requestid',carpooling_Controller.getRideRequestById);
router.put('/api/carpoolings/riderequests/:requestid',carpooling_Controller.editRideRequestById);
router.delete('/api/carpoolings/riderequests/:requestid',carpooling_Controller.deleteRideRequestById);


module.exports = router;