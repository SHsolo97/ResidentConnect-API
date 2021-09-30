var mongoose = require('mongoose');
var randtoken = require('rand-token');

var Schema = mongoose.Schema;
var apartmentschema = new Schema({
    communityid : {type: Schema.Types.ObjectId, ref: 'community',required: true},
    token: {
      type: String,
      default: function() {
          return randtoken.generate(5);
      },required:true,unique:true
     },
     aptnum : {type: String, required: true},
    block : {type: String, required: true},
    floor : {type: Number, required: true},
    model:
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
    },
      
    issold : {type: Boolean, default:false,required: true},

    status:{
        type: String,
        enum:  ['vacant', 'self-occupied', 'rented out','not-sold'],
        default: 'not-sold'
    }
})


var apartmentModel = mongoose.model('Apartments', apartmentschema );

module.exports=apartmentModel;