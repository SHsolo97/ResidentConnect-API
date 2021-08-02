var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var apartmentschema = new Schema({
    communityId : {type: Schema.Types.ObjectId, ref: 'community',required: true},
    aptnum : {type: String, required: true},
    block : {type: String, required: true},
    floor : {type: Number, required: true},
    bedrooms : {type: Number, required: true},
    bathroom:{type: Number, required: true},
    balconies:{type: Number, required: true},
    model:{type: String, required: true},
    superbuilduparea : {type: Number},
    builduparea : {type: Number},
    carpetarea : {type: Number},
    issold : {type: Boolean, required: true},
    enrolled:{type: Number,  max: 10, required: true,default:0},
    status:{
        type: String,
        enum:  ['vacant', 'self-occupied', 'rented out'],
        default: 'vacant'
    },
    emerencydetails:
    [
        {
            name: {type: String},
            phone: {type: String}
        }
    ]
})


var apartmentModel = mongoose.model('apartments', apartmentschema );

module.exports=apartmentModel;