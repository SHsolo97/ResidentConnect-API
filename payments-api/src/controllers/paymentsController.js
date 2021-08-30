const { validationResult } = require('express-validator');
const axios = require ('axios');
const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const paymentsInfo = require('../models/payments-info');


exports.gethealthStatus= async function(req, res,next) {
    const returnval="payments service running at port 4012 ... v0.0.4";
      res.status(200).send( returnval);
  }

//router.get('/api/community/:id/apartment/:aid/payments',payments_Controller.getPaymentInfoByApartmentId);
exports.getPaymentInfoByApartmentId = async function(req, res,next) {
}


//router.post('/api/payments/create',payments_Controller.createPayment);

exports.createPayment = async function(req, res,next) {
    const recipient=req.body.recipient;
    const subject=req.body.subject;
    const body=`maintenance due=Rs ${req.body.amt}`;
    var email={
        "subject":subject,
         "body":body,
         "recipient":recipient
    }
    axios.post('https://zl4i20n7s8.execute-api.ap-south-1.amazonaws.com/dev/sendMail', email)
    

    .then(res => {}
        )
        .catch(err=>{
            //console.log(err);
            const error = new HttpError(
                `Something went wrong, could not send emails`,
                500
              );
              return next(error);
        })
    res.status(200).json(email);

}


//router.get('/api/payment/:pid',payments_Controller.getPaymentInfoById);
exports.getPaymentInfoById = async function(req, res,next) {
}


//router.put('/api/payments/:pid',payments_Controller.editPaymentInfo);
exports.editPaymentInfo = async function(req, res,next) {
}


//router.delete('/api/payments/:pid',payments_Controller.deletePaymentInfo);
exports.deletePaymentInfo = async function(req, res,next) {
}
