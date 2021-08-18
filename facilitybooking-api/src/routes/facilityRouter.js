var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var facility_controller = require('../controllers/facility-info');



router.get('/api/community/:id/facility',facility_controller.getFacilitybyCommunityId);
router.post('/api/community/:id/facility/create',facility_controller.createFacility);
router.put('/api/community/:id/facility/:fid',facility_controller.editFacility);
router.patch('/api/community/:id/facility/:fid',facility_controller.bookFacility);
router.patch('/api/community/:id/facility/:fid',facility_controller.cancelFacilityBooking);
router.delete('/api/community/:id/facility/:fid',facility_controller.deleteFacility);
module.exports = router;