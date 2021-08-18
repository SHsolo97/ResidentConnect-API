var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var maintenance_Controller = require('../controllers/maintenanceController');



router.get('/api/community/:id/apartment/:aid/maintenancerequests',maintenance_Controller.getMaintenanceReqByApartmentId);
router.post('/api/community/:id/apartment/:aid/maintenanceeRequest/create',maintenance_Controller.createMaintenanceReq);

router.get('/api/maintenance/:mid',maintenance_Controller.getMaintenanceReqById);
router.put('/api/maintenance/:mid',maintenance_Controller.editMaintenanceReq);
router.delete('/api/maintenance/:mid',maintenance_Controller.deleteMaintenanceReq);

module.exports = router;