var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var apartmentschema = new Schema({
    communityid : {type: Schema.Types.ObjectId, ref: 'community',required: true},
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
    enrolled:{type: Number,  max: 10, required: true,default:0},
    enrolledby :[ {type: Schema.Types.ObjectId, ref: 'User',required: true}],

    status:{
        type: String,
        enum:  ['vacant', 'self-occupied', 'rented out','not-sold'],
        default: 'not-sold'
    }
})


var apartmentModel = mongoose.model('Apartments', apartmentschema );

module.exports=apartmentModel;