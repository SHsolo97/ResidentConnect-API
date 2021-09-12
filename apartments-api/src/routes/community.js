var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var community_controller = require('../controllers/communityController');


router.get('/api/community/health-status',community_controller.gethealthStatus);
router.get('/api/community/validatetoken/:token',community_controller.valitateToken);
router.put('/api/community/:id',community_controller.editCommunityDetails);

router.get('/api/community',community_controller.community_list);
router.get('/api/community/:id',community_controller.getCommunityById);

router.post('/api/community/create',
[check('name').not().isEmpty(),
check('builder').not().isEmpty()],
community_controller.createCommunity);



router.patch('/api/community/:id/blocks/create',community_controller.addBlocksInCommunity);
router.put('/api/community/:id/blocks/edit',community_controller.editBlocksInCommunity);

router.get('/api/community/:id/blocks',community_controller.getBlocksInCommunity);

router.patch('/api/community/:id/floors/create',community_controller.addFloorsInCommunity);

router.patch('/api/community/:id/model/create',community_controller.addApartmentModelInCommunity);
router.get('/api/community/:id/models',community_controller.getApartmentModelsInCommunity);
router.post('/api/community/model',community_controller.getApartmentModelsInCommunitybyName);



module.exports = router;