var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var communitySchema = new Schema({
    name : {type: String, required: true},
    builder: {type: String,required: true},
    createdAt: { type: Date, default: Date.now() , required: true},
    address : {
      addressline : {type: String,required: true},
      area : {type: String, required: true},
      city: {type: String,required: true},
      state : {type: String,required: true},
      pincode : {type: String, required: true}
},
blocks:{type:Number},
blockdetails:[
  {
      block: {type: String},
      floors: {type:Number},
      flats:{type:Number},
      floordetails:
      [
          {
              floor:{type:Number},
              flats:[{type: Schema.Types.ObjectId, ref: 'apartments',required: true}]
          }              
      ]
  }
]
    
   
});
communitySchema
.virtual('url')
.get(function () {
  return '/community/' + this._id;
});
// Compile model from schema
var communityModel = mongoose.model('communities', communitySchema );
module.exports =communityModel;