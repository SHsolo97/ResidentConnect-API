var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var pollinginfo_Controller = require('../controllers/pollinginfoController');


router.get('/api/pollings/health-status',pollinginfo_Controller.gethealthStatus);

router.post('/api/pollings/search',pollinginfo_Controller.getPollings);
router.post('/api/pollings/create',pollinginfo_Controller.  createPolling);
router.get('/api/pollings/:pid',pollinginfo_Controller.getPolling);
router.put('/api/pollings/:pid',pollinginfo_Controller.updatePolling);
module.exports = router;