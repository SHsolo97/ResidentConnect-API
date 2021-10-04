const { validationResult } = require('express-validator');
const axios = require ('axios');
const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const PaymentInfo = require('../models/payments-info');


exports.gethealthStatus= async function(req, res,next) {
    const returnval="payments service running at port 4012 ... v0.0.4";
      res.status(200).send( returnval);
  }

//router.get('/api/community/:id/apartment/:aid/payments',payments_Controller.getPaymentInfoByApartmentId);
exports.searchPayments = async function(req, res,next) {
    
    let payments,count;
   
    try {
        payments = await PaymentInfo.find(req.body).sort({dueat:-1});
        count = await PaymentInfo.find(req.body).countDocuments();
    } catch (err) {
      const error = new HttpError(
        `Fetching payments failed,  please try again later.`,
        500
      );
      return next(error);
    }
   
 

    res.json({count: count, payments: payments.map(payment => payment.toObject())});
}
exports.getPaymentHistory = async function(req, res,next) {
    
  let payments,count;
 
  try {
      payments = await PaymentInfo.find(req.body).sort({paidat:-1});
      count = await PaymentInfo.find(req.body).countDocuments();
  } catch (err) {
    const error = new HttpError(
      `Fetching payments failed,  please try again later.`,
      500
    );
    return next(error);
  }
 


  res.json({count: count, payments: payments.map(payment => payment.toObject())});
}


//router.post('/api/payments/create',payments_Controller.createPayment);
exports.createPayments   = async function(req, res,next) {
 
    const payments=req.body;

  // const payment=new PaymentInfo(req.body);
   PaymentInfo.insertMany(payments).then(function(docs){ 
    res.status(201).json( docs );  // Success 
}).catch(function(error){ 
    console.log(error)      // Failure 
});

  
  
}
// exports.createPayment = async function(req, res,next) {
//     const recipient=req.body.recipient;
//     const subject=req.body.subject;
//     const body=`maintenance due=Rs ${req.body.amt}`;
//     var email={
//         "subject":subject,
//          "body":body,
//          "recipient":recipient
//     }
//     axios.post('https://zl4i20n7s8.execute-api.ap-south-1.amazonaws.com/dev/sendMail', email)
    

//     .then(res => {}
//         )
//         .catch(err=>{
//             //console.log(err);
//             const error = new HttpError(
//                 `Something went wrong, could not send emails`,
//                 500
//               );
//               return next(error);
//         })
//     res.status(200).json(email);

// }


//router.get('/api/payment/:pid',payments_Controller.getPaymentInfoById);
exports.getPaymentInfoById = async function(req, res,next) {
}


//router.put('/api/payments/:pid',payments_Controller.editPaymentInfo);
exports.editPaymentInfo = async function(req, res,next) {
  const pid=req.params.pid;


    const filter={_id:pid};
    const update=req.body;
    let payment;
    try{
      payment=await PaymentInfo.findOneAndUpdate(filter, update, {
        new: true
      });
      
    }
  catch (err) {
    console.log(err);
      const error = new HttpError(
        `Something went wrong, could not edit a payment- ${pid}`,
        500
      );
      return next(error);
    }

    
if (!payment) {
  const error = new HttpError(
    'Could not find a payment for the provided id.',
    404
  );
  return next(payment);
}  

res.status(200).json(payment.toObject() );
}


//router.delete('/api/payments/:pid',payments_Controller.deletePaymentInfo);
exports.deletePaymentInfo = async function(req, res,next) {
  const pid = req.params.pid;

  let payment;
  try {
    payment = await PaymentInfo.findById(pid);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete payment.',
      500
    );
    return next(error);
  }

  if (!payment) {
    const error = new HttpError('Could not find payment for this id.', 404);
    return next(error);
  }

  try {
    await payment.remove();

  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not payment user.',
      500
    );
    return next(error);
}   
}
exports.getPaymentsByMonth = async function(req, res,next) {
  
}