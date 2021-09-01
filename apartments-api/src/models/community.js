var mongoose = require('mongoose');
var randtoken = require('rand-token');

var Schema = mongoose.Schema;

var communitySchema = new Schema({
  token: {
    type: String,
    default: function() {
        return randtoken.generate(5);
    },required:true,unique:true
   },
   profilecompletion:{type:Boolean,required:true,default:false},
    name : {type: String, required: true},
    builder: {type: String},
    createdat: { type: Date, default: Date.now() , required: true},
    address : {
      addressline : {type: String},
      area : {type: String},
      city: {type: String},
      state : {type: String},
      pincode : {type: String}
},
modeldetails:[
  {
    name: {type: String},
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
      floors: {type:Number,default: 0},
      flats:{type:Number,default: 0},
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