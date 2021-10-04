var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var rideSchema = new Schema({
    communityid : {type: Schema.Types.ObjectId, ref: 'community',required: true},
    creator:{type: Schema.Types.ObjectId, ref: 'User',required: true},
    car: {type:String,required: true},
    amt:{type:Number},
    source: {
        addressline : {type: String,default:''},
        area : {type: String,default:''},
        city: {type: String,default:''},
        state : {type: String,default:''},
        pincode : {type: String,default:''},
      
  
  },
    destination: {
        addressline : {type: String,default:''},
        area : {type: String,default:''},
        city: {type: String,default:''},
        state : {type: String,default:''},
        pincode : {type: String,default:''}, 
  
  },
    stoppoints:[{type:String}],
    thumbnail:{type:String},
    airconditioned:{type:Boolean,defalut:false},
    ridedatetime:{type:Date,required:true},

    seats:{
        available:{type:Number},
        filled:{type:Number,default:0},
    },
    contact:{type:String, required:true},
    status: {type:String, required:true, enum:  ['active', 'closed','cancelled'], default: 'active'},

}, { timestamps: { createdAt: 'createdat',updatedAt:'updatedat' } })

// Compile model from schema
module.exports =mongoose.model('ride', rideSchema );
