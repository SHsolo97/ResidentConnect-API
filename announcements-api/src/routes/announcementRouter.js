var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var announcement_Controller = require('../controllers/announcementController');
router.get('/api/announcements/health-status',announcement_Controller.gethealthStatus);
router.post('/api/announcements',announcement_Controller.searchAnnouncements);

router.get('/api/announcements/:aid',announcement_Controller.getAnnouncementbyId);
router.post('/api/announcements/create',announcement_Controller.createAnnouncement);
module.exports = router;