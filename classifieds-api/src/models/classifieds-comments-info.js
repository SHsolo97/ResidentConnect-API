var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var classifiedsCommentsInfoSchema = new Schema({
    classifiedid : {type: Schema.Types.ObjectId, ref: 'classifieds',required: true},
    createdat: { type: Date, default: Date.now() , required: true},

   
        givenby:{type: Schema.Types.ObjectId, ref: 'User',required: true},
        rating:{type:Number,default:0},
        comment:{type: String}
       
   
    
   
});

// Compile model from schema
module.exports =mongoose.model('classifiedscomments', classifiedsCommentsInfoSchema );;