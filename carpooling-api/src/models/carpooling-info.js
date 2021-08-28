var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var carpoolingSchema = new Schema({
    communityid : {type: Schema.Types.ObjectId, ref: 'community',required: true},
    creator:{type: Schema.Types.ObjectId, ref: 'User',required: true},
    title: {type:String, required:true},
    description: {type:String, required:true},
    source:{type:String, required:true},
    destination:{type:String, required:true},
    stoppoints:[{type:String}],
    starttime:{type:String,required:true},
    seats:{
        available:{type:Number},
        filled:{type:Number,default:0},
    },
    contact:{type:String, required:true}
  
})

// Compile model from schema
module.exports =mongoose.model('carpolling', carpoolingSchema );
