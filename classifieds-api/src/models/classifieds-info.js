var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var classifiedsInfoSchema = new Schema({
    communityid : {type: Schema.Types.ObjectId, ref: 'community',required: true},

    category:{type: String},
    subcategory:{type: String},
    name:{type: String, required: true},
    description:{type:String,required:true},
    website:{type:String},
    thumbnail:{type:String},
    ratings:{
        _5star:{type:Number,default:0,required:true},
        _4star:{type:Number,default:0,required:true},
        _3star:{type:Number,default:0,required:true},
        _2star:{type:Number,default:0,required:true},
        _1star:{type:Number,default:0,required:true},
        _totrating:{type:Number,default:0,required:true},
        _avgstar:{type:Number,default:0,required:true},
    },
    comments:{Type:Number,default:0},
    phone:
            [
               {
                   type : {type: String, enum:  ['mobile', 'home', 'office'], default: 'mobile'},
                   number: {type: String},
                   hours: {type: String}
                }
               
            ],
            emails:[{type: String}],
            address : {
                addressline : {type: String},
                area : {type: String},
                city: {type: String},
                state : {type: String},
                pincode : {type: String}
            }

    
   
});
classifiedsInfoSchema
.virtual('url')
.get(function () {classifiedsinfo
  return '/community/'+ this.communityid +'/classified/' + this._id+ '/' 
});
// Compile model from schema
module.exports =mongoose.model('classifieds', classifiedsInfoSchema );;