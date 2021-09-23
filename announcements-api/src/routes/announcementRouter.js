var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var announcement_Controller = require('../controllers/announcementController');
router.get('/api/announcements/health-status',announcement_Controller.gethealthStatus);
router.post('/api/announcements/search',announcement_Controller.searchAnnouncements);

router.get('/api/announcements/:aid',announcement_Controller.getAnnouncementbyId);
router.put('/api/announcements/:aid',announcement_Controller.editAnnouncementbyId);
router.delete('/api/announcements/:aid',announcement_Controller.deleteAnnouncementbyId);

router.post('/api/announcements/create',announcement_Controller.createAnnouncement);
module.exports = router;