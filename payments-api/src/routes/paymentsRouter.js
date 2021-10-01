var express = require('express');
const { check } = require('express-validator');


var router = express.Router();
var payments_Controller = require('../controllers/paymentsController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/api/payments/docs', swaggerUi.serve);
router.get('/api/payments/docs', swaggerUi.setup(swaggerDocument));

router.get('/api/payments/health-status',payments_Controller.gethealthStatus);
router.post('/api/payments/search',payments_Controller.searchPayments);
router.post('/api/payments/create',payments_Controller.createPayments);
router.post('/api/payments/paymenthistory',payments_Controller.getPaymentHistory);

router.get('/api/payments/:pid',payments_Controller.getPaymentInfoById);
router.put('/api/payments/:pid',payments_Controller.editPaymentInfo);
router.delete('/api/payments/:pid',payments_Controller.deletePaymentInfo);

module.exports = router;