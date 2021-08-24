var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var visitors_Controller = require('../controllers/visitorsController');

router.get('/api/visitor/health-status',visitors_Controller.gethealthStatus);

router.post('/api/visitor/create',visitors_Controller.createVisitor);

router.get('/api/visitors/:vid',visitors_Controller.getvisitorById);
router.put('/api/visitors/:vid',visitors_Controller.editvisitor);
router.delete('/api/visitors/:vid',visitors_Controller.deletevisitor);
router.post('/api/vistors',visitors_Controller.getvisitors);


module.exports = router;