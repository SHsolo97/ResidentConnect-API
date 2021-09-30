var express = require('express');
const { models } = require('mongoose');
var router = express.Router();
var apartmentmodel_Controller = require('../controllers/apartmentModelController');

router.delete('/api/community/apartments/models/:modelid', apartmentmodel_Controller.delete_ApartmentModel); //documented


router.get('/api/community/:communityid/apartments/models',apartmentmodel_Controller.apartmentmodels_list); //documented
router.get('/api/community/apartments/models/:modelid',apartmentmodel_Controller.getApartmentModel); //documented
router.post('/api/community/apartments/models/create',apartmentmodel_Controller.create_ApartmentModel); //documented
router.put('/api/community/apartments/models/:modelid', apartmentmodel_Controller.edit_ApartmentModel); //documented
module.exports = router;