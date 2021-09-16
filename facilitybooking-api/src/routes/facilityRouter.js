var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var facility_controller = require('../controllers/facility-info');


router.get('/api/facilities/health-status',facility_controller.gethealthStatus); //done

router.get('/api/facilities/faciltytypes',facility_controller.getFacilityTypes); //done

router.post('/api/facilities/faciltytypes/create',facility_controller.createFacilityType); //done


router.post('/api/facilities/search',facility_controller.getFacilities);
router.get('/api/facilities/:fid',facility_controller.getFacilityById);

router.post('/api/facilities/create',facility_controller.createFacility);
router.put('/api/facilities/:fid',facility_controller.editFacility);
router.delete('/api/facilities/:fid',facility_controller.deleteFacility);

router.post('/api/facilities/book',facility_controller.bookFacility);
router.put('/api/facilities/booking/cancel',facility_controller.cancelFacilityBooking);
router.post('/api/facilities/booking/search',facility_controller.searchFacilityBooking);

module.exports = router;