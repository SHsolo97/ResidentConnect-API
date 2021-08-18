const { Double, Decimal128 } = require('bson');
var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var paymentsinfoSchema = new Schema({
    communityid : {type: String},
    apartmentid : {type:String},
    category:{type:String},   
    createdat:{type:Date},
    dueat:{type:Date},
    due:{type:Number},
    status:{type:String}
  
    
});

module.exports =mongoose.model('paymentsinfo', paymentsinfoSchema );