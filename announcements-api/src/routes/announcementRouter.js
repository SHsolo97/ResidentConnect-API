var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var announcement_Controller = require('../controllers/announcementController');

router.get('/api/community/:cid/announcements',announcement_Controller.getAnnouncements);
router.get('/api/community/:cid/announcements/active',announcement_Controller.getActiveAnnouncements);

router.get('/api/announcement/:aid',announcement_Controller.getAnnouncementbyId);
router.post('/api/announcement/create',announcement_Controller.createAnnouncement);
module.exports = router;