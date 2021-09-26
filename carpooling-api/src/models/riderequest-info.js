var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var riderequestSchema = new Schema({
    ride : {type: Schema.Types.ObjectId, ref: 'ride',required: true},
    owner:{type: Schema.Types.ObjectId, ref: 'User',required: true},
    seats:{type:Number},
    requestedby:{type: Schema.Types.ObjectId, ref: 'User',required: true},
    status: {type:String, required:true, enum:  ['pending', 'approved','rejected'], default: 'pending'},
    rejectionreason: {type:String}
});
module.exports =mongoose.model('riderequest', riderequestSchema );
