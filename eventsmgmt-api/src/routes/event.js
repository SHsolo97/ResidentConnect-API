var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var event_controller = require('../controllers/eventController');

router.get('/api/events/health-status',event_controller.gethealthStatus);


router.get('/api/events/:eid',event_controller.getEventById); //done
router.post('/api/events/',event_controller.getEvents); //search, location

router.put('/api/events/:eid',event_controller.editEvent);
router.delete('/api/events/:eid',event_controller.deleteEvent);


router.post('/api/events/create',event_controller.createEvent); //done (partial)

router.patch('/api/events/:eid/user/enroll',event_controller.enrollToEvent);
router.patch('/api/events/:eid/user/unenroll',event_controller.unEnrollToEvent);


module.exports = router;