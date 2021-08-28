var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var pollinginfo_Controller = require('../controllers/pollinginfoController');



router.get('/api/community/:id/pollings',pollinginfo_Controller.getPollingsbyCommunityId);
router.post('/api/community/:id/polling/create',pollinginfo_Controller.createPolling);
router.get('/api/community/:id/polling/:pid',pollinginfo_Controller.getPolling);
router.put('/api/community/:id/polling/:pid',pollinginfo_Controller.updatePolling);
module.exports = router;