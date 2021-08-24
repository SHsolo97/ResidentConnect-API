const { Double, Decimal128 } = require('bson');
var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var maintenanceinfoSchema = new Schema({
    communityid : {type: String},
    apartmentid : {type:String},
    category:{type:String},
    subcategory:{type:String},
    description:{type:String},
    status:{
        type:String
    },
    createdat:{type:Date},
    closedat:{type:Date},
    assignedto:{type:String},
    servicecharge:{type:Decimal128},
    materialcharge:{type:Decimal128}
 
    
});

module.exports =mongoose.model('maintenanceinfo', maintenanceinfoSchema );