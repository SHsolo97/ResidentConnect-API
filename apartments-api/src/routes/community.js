var express = require('express');
var router = express.Router();
var community_controller = require('../controllers/communityController');



router.get('/api/communities',community_controller.community_list);
router.get('/api/community/:id',community_controller.community_detail);

router.post('/api/community/create',community_controller.community_create_post);

router.patch('/api/community/:id/blocks/create',community_controller.community_add_blocks);
router.patch('/api/community/:id/floors/create',community_controller.community_add_floors);



module.exports = router;