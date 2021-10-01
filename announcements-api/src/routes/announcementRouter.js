var express = require('express');
const { check } = require('express-validator');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
var router = express.Router();


router.use('/api/announcements/docs', swaggerUi.serve);
router.get('/api/announcements/docs', swaggerUi.setup(swaggerDocument));
var announcement_Controller = require('../controllers/announcementController');
router.get('/api/announcements/health-status',announcement_Controller.gethealthStatus);
router.post('/api/announcements/search',announcement_Controller.searchAnnouncements);

router.get('/api/announcements/:aid',announcement_Controller.getAnnouncementbyId);
router.put('/api/announcements/:aid',announcement_Controller.editAnnouncementbyId);
router.delete('/api/announcements/:aid',announcement_Controller.deleteAnnouncementbyId);

router.post('/api/announcements/create',announcement_Controller.createAnnouncement);
module.exports = router;