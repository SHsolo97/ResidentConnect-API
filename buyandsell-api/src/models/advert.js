var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var advertSchema = new Schema({
    communityid : {type: Schema.Types.ObjectId, ref: 'community',required: true},
    creator:{type: Schema.Types.ObjectId, ref: 'User',required: true},
    createdat: { type: Date, default: Date.now() , required: true},
    activatedat: { type: Date, default: Date.now() , required: true},
    expiredat:{type:Date},
    title: {type:String, required:true},
    description: {type:String, required:true},
    category: {type:String, required:true},
    subcategory: {type:String, required:true},
    status:{type:String, required:true ,enum:  ['active','inactive'],
    default: 'active'},
    type: {
        type: String,
        enum:  ['private','business'],
        default: 'private'
    },
 
    images:[{type:String}],
    price:{
        value:{type:Number},        
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
