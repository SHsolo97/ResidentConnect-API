const { Double, Decimal128 } = require('bson');
var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var paymentsinfoSchema = new Schema({
    communityid : {type: String},
    apartmentid : {type:String},
    period: {type:String},
    category:{type:String},   
    createdat:{type:Date,required: true, default: Date.now},
    dueat:{type:String},
    amt:{type:Number},
    status:{type:String}
  
    
});

module.exports =mongoose.model('paymentsinfo', paymentsinfoSchema );