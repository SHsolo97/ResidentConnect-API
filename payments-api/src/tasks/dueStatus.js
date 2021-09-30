const { validationResult } = require('express-validator');
const axios = require ('axios');
const HttpError = require('../models/http-error');
const mongoose = require('mongoose');

const PaymentInfo = require('../models/payments-info');

exports.updatePaymentStatus = async function() {
  
    var cutoff = new Date();

    
    let payments=[];
    try{
        payments=await PaymentInfo.find({$and:[{dueat:{$lt:cutoff}} , {status:'due'} ]});
        console.log(payments);
        payments.map(payment=>{
            const update={status:'overdue'};
            axios.put(`http://localhost:4012/api/payments/${payment._id}`,update)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
            

        });
  
    }
    catch (err) {
      console.log(err);
      
      
      }
  
      
  
  
  }