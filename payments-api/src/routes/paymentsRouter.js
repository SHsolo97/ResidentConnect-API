var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var payments_Controller = require('../controllers/paymentsController');



router.get('/api/community/:id/apartment/:aid/payments',payments_Controller.getPaymentInfoByApartmentId);
router.post('/api/community/:id/apartment/:aid/payment/create',payments_Controller.createPayment);

router.get('/api/payment/:pid',payments_Controller.getPaymentInfoById);
router.put('/api/payment/:pid',payments_Controller.editPaymentInfo);
router.delete('/api/payment/:pid',payments_Controller.deletePaymentInfo);

module.exports = router;