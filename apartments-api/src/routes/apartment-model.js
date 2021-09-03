var express = require('express');
const { models } = require('mongoose');
var router = express.Router();
var apartmentmodel_Controller = require('../controllers/apartmentModelController');

router.delete('/api/community/apartments/models/:modelid', apartmentmodel_Controller.delete_ApartmentModel);


router.get('/api/community/:communityid/apartments/models',apartmentmodel_Controller.apartmentmodels_list);
router.get('/api/community/apartments/models/:modelid',apartmentmodel_Controller.getApartmentModel);
router.post('/api/community/apartments/models/create',apartmentmodel_Controller.create_ApartmentModel);
router.put('/api/community/apartments/models/:modelid', apartmentmodel_Controller.edit_ApartmentModel);
module.exports = router;