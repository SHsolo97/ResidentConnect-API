var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var maintenance_Controller = require('../controllers/maintenanceController');

router.get('/api/maintenancerequests/health-status',maintenance_Controller.gethealthStatus);


router.post('/api/maintenancerequests/search',maintenance_Controller.getMaintenanceReqs);
router.post('/api/maintenanceRequests/create',maintenance_Controller.createMaintenanceReq);

router.get('/api/maintenanceRequests/:mid',maintenance_Controller.getMaintenanceReqById);
router.put('/api/maintenanceRequests/:mid',maintenance_Controller.editMaintenanceReq);
router.delete('/api/maintenanceRequests/:mid',maintenance_Controller.deleteMaintenanceReq);

module.exports = router;