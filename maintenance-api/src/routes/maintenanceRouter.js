var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var maintenance_Controller = require('../controllers/maintenanceController');

router.get('/api/gethealthStatus/health-status',maintenance_Controller.gethealthStatus);


router.post('/api/maintenancerequests',maintenance_Controller.getMaintenanceReqs);
router.post('/api/maintenanceeRequests/create',maintenance_Controller.createMaintenanceReq);

router.get('/api/maintenanceeRequests/:mid',maintenance_Controller.getMaintenanceReqById);
router.put('/api/maintenanceeRequests/:mid',maintenance_Controller.editMaintenanceReq);
router.delete('/api/maintenanceeRequests/:mid',maintenance_Controller.deleteMaintenanceReq);

module.exports = router;