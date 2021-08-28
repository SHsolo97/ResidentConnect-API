var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var contactinfoSchema = new Schema({
    _id : {type: Schema.Types.ObjectId, ref: 'community',required: true,unique: true},
    contacts:
    [
        {
            type:{type: String, required: true},
            name:{type: String, required: true},
            phone:
            [
               {
                   type : {type: String, enum:  ['mobile', 'home', 'office'], default: 'mobile'},
                   number: {type: String},
                   hours: {type: String}
                }
               
            ],
            emails:[String],
            address : {
                addressline : {type: String},
                area : {type: String},
                city: {type: String},
                state : {type: String},
                pincode : {type: String}
            },

        }
    ]
   
});
contactinfoSchema
.virtual('url')
.get(function () {
  return '/community/'+ this._id +'/contacts' 
});
// Compile model from schema
module.exports =mongoose.model('contactinfos', contactinfoSchema );;