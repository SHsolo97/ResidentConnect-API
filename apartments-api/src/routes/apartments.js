var express = require('express');
const { models } = require('mongoose');
var router = express.Router();
var apartments_Controller = require('../controllers/apartmentsController');



router.get('/api/community/:communityid/apartments',apartments_Controller.apartments_list);
router.get('/api/community/:communityid/apartment/:apartmentid',apartments_Controller.apartment_details);
router.post('/api/community/:communityid/apartment/create',apartments_Controller.apartment_create_post);
router.put('/api/community/:communityid/apartment/:apartmentid',apartments_Controller.apartment_update);
module.exports = router;