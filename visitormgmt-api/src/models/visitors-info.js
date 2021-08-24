const { Double, Decimal128 } = require('bson');
var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var visitorsinfoSchema = new Schema({
    communityid : {type: String},
    apartmentid : {type:String},
    inocomingtime:{type:Date},
    outgoingtime:{type:Date},
    visitordetails:{
        name:{type:String},
        phone:{type:String},
        purpose:{type:String}
    },
    isEntryAllowed:{type:String}

    
});

module.exports =mongoose.model('visitorsinfo', visitorsinfoSchema );