const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const paymentsInfo = require('../models/payments-info');



//router.get('/api/community/:id/apartment/:aid/payments',payments_Controller.getPaymentInfoByApartmentId);
exports.getPaymentInfoByApartmentId = async function(req, res,next) {
}


//router.post('/api/community/:id/apartment/:aid/payment/create',payments_Controller.createPayment);
exports.createPayment = async function(req, res,next) {
}


//router.get('/api/payment/:pid',payments_Controller.getPaymentInfoById);
exports.getPaymentInfoById = async function(req, res,next) {
}


//router.put('/api/payment/:pid',payments_Controller.editPaymentInfo);
exports.editPaymentInfo = async function(req, res,next) {
}


//router.delete('/api/payment/:pid',payments_Controller.deletePaymentInfo);
exports.deletePaymentInfo = async function(req, res,next) {
}
