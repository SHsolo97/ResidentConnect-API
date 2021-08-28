var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var visitors_Controller = require('../controllers/visitorsController');



router.get('/api/community/:id/apartment/:aid/vistors',visitors_Controller.getVisitorsByApartmentId);
router.post('/api/community/:id/apartment/:aid/visitor/create',visitors_Controller.createVisitor);

router.get('/api/visitor/:vid',visitors_Controller.getvisitorById);
router.put('/api/visitor/:vid',visitors_Controller.editvisitor);
router.delete('/api/visitor/:vid',visitors_Controller.deletevisitor);
router.post('/api/community/:id/apartment/:aid/vistors',visitors_Controller.searchVisitor);


module.exports = router;