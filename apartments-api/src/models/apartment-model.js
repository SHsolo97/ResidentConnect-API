var mongoose = require('mongoose');
var randtoken = require('rand-token');

var Schema = mongoose.Schema;

var apartmentModelSchema = new Schema(
{
    communityid:{type: Schema.Types.ObjectId, ref: 'community',required: true},
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
  });
  var apartmentModelschema = mongoose.model('apartmentsmodels', apartmentModelSchema );

module.exports=apartmentModelschema;