var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var facilitybookingSchema = new Schema({
    facilityid : {type: Schema.Types.ObjectId, ref: 'facility',required: true},
    bookedby:{type: Schema.Types.ObjectId, ref: 'User',required: true},
    bookeddate:{type:String},
    bookedtype:{type:String,  enum:  ['free', 'day', 'slot','maintenance']},
    bookedslot:
    {
        starttime:{type:String},
        endtime:{type:String}
                
    },
    bookedstatus:{type:String,  enum:  ['cancelled', 'booked','pending']},
    cancellationreason:{type:String}
})


var facilitybookingModel = mongoose.model('facilitybooking', facilitybookingSchema );

module.exports=facilitybookingModel;