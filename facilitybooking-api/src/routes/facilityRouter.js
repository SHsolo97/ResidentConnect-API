var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var facility_controller = require('../controllers/facility-info');


router.get('/api/facilities/health-status',facility_controller.gethealthStatus);

router.get('/api/facilities/faciltytypes',facility_controller.getFacilityTypes);

router.post('/api/facilities/faciltytypes/create',facility_controller.createFacilityType);


router.post('/api/facilities',facility_controller.getFacilities);
router.get('/api/facilities/:fid',facility_controller.getFacility);

router.post('/api/facilities/create',facility_controller.createFacility);
router.put('/api/facilities/:fid',facility_controller.editFacility);
router.patch('/api/facilities/:fid',facility_controller.bookFacility);
router.patch('/api/facilities/:fid',facility_controller.cancelFacilityBooking);
router.delete('/api/facilities/:fid',facility_controller.deleteFacility);
module.exports = router;