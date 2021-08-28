var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var communitySchema = new Schema({
    name : {type: String, required: true},
    builder: {type: String,required: true},
    createdAt: { type: Date, default: Date.now() , required: true},
    address : {
      addressline : {type: String},
      area : {type: String},
      city: {type: String},
      state : {type: String},
      pincode : {type: String}
},
modeldetails:[
  {
    name: {type: String,required: true},
    area:{
      carpetarea:{type: Number},
      builduparea:{type: Number},
      superbuilduparea:{type: Number}
    },
    rooms : {
      bedrooms : {type: Number},
      bathrooms :{type: Number},
      balconies: {type: Number},
      kitchens : {type: Number},
      halls :{type: Number},
      otherrooms:{type: Number}
  }
  }
],
blockdetails:[
  {
      block: {type: String},
      floors: {type:Number,default: 0, required: true},
      flats:{type:Number,default: 0, required: true},
      floordetails:
      [
          {
              floor:{type:Number},
              flats:[{type: Schema.Types.ObjectId, ref: 'apartments'}]
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
module.exports =mongoose.model('Communities', communitySchema );;