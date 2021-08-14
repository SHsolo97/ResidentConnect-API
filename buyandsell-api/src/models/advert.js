var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var advertSchema = new Schema({
    communityid : {type: Schema.Types.ObjectId, ref: 'community',required: true},
    creator:{type: Schema.Types.ObjectId, ref: 'User',required: true},
    title: {type:String, required:true},
    description: {type:String, required:true},
    advertiser_type: {
        type: String,
        enum:  ['private','business'],
        default: 'venue'
    },
    contact:
    {
        name:{type:String, required:true},
        phone:{type:String, required:true},
    },
    images:[{type:String}],
    price:{
        value:{type:Number},
        currency:{type:String},
        negotiable:{type:Boolean}
    }

})
advertSchema
.virtual('url')
.get(function () {
  return '/community/'+ this.communityid +'/advert/' +this._id
});
// Compile model from schema
module.exports =mongoose.model('adverts', advertSchema );;
