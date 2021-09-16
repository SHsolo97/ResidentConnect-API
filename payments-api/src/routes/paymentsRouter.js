var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var payments_Controller = require('../controllers/paymentsController');


router.get('/api/payments/health-status',payments_Controller.gethealthStatus);
router.post('/api/payments/search',payments_Controller.searchPayments);
router.post('/api/payments/create',payments_Controller.createPayments);

router.get('/api/payments/:pid',payments_Controller.getPaymentInfoById);
router.put('/api/payments/:pid',payments_Controller.editPaymentInfo);
router.delete('/api/payments/:pid',payments_Controller.deletePaymentInfo);

module.exports = router;