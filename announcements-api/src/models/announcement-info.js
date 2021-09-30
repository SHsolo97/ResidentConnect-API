var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var announcementInfoSchema = new Schema({
    communityid : {type: String},
    title:{type:String},
    description:{type:String},
    createdby:{type: Schema.Types.ObjectId, ref: 'User',required: true},
    createdat:{type:Date,default: Date.now() , required: true},
    expiredat:{type:Date,default: Date.now() , required: true}

});
// Compile model from schema
module.exports =mongoose.model('announcementinfo', announcementInfoSchema );;