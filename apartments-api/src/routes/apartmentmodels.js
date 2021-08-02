var express = require('express');
var router = express.Router();
var apartmentmodels_Controller = require('../controllers/apartmentmodelsController');

router.get('/api/community/:communityid/models',apartmentmodels_Controller.models_list);
router.get('/api/community/:communityid/model/:modelid',apartmentmodels_Controller.model_details);
router.post('/api/community/:communityid/model/create',apartmentmodels_Controller.model_create_post);
router.put('/api/community/:communityid/model/:modelid',apartmentmodels_Controller.model_update);

module.exports = router;