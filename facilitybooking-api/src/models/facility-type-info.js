var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var FacilityTypeSchema = new Schema({

    facilitytype:{type: String},
    
   
});

// Compile model from schema
module.exports =mongoose.model('facilityTypes', FacilityTypeSchema );;