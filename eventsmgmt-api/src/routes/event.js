var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var event_controller = require('../controllers/eventController');


router.get('/api/events',event_controller.getEventsList);//done
router.get('/api/event/:eid',event_controller.getEventById); //done
router.post('/api/events/',event_controller.getEvents);

router.put('/api/event/:eid',event_controller.editEvent);
router.delete('/api/event/:eid',event_controller.deleteEvent);


router.post('/api/event/create',event_controller.createEvent); //done (partial)

router.patch('/api/event/:eid/user/enroll',event_controller.enrollToEvent);
router.patch('/api/event/:eid/user/unenroll',event_controller.unEnrollToEvent);


module.exports = router;