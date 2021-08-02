var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var apartmentmodelSchema = new Schema({
  communityid : {type: Schema.Types.ObjectId, ref: 'community',required: true},
 
  name: {type: String,required: true},
  createdAt: { type: Date, default: Date.now() , required: true},
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


})
apartmentmodelSchema
.virtual('url')
.get(function () {
  return '/apartmentmodel/' + this._id;
});
// Compile model from schema
var apartmentM_model = mongoose.model('apartmentmodels', apartmentmodelSchema );
module.exports =apartmentM_model;