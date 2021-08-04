var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var eventSchema = new Schema({
    communityid : {type: Schema.Types.ObjectId, ref: 'community',required: true},
    name:{type: String,required:true},
    createdAt: { type: Date, default: Date.now() , required: true},
    organizer: {type: Schema.Types.ObjectId, ref: 'User',required: true},
    startdate:{type:Date,required:true},
    enddate:{type:Date,required:true},
    mode:{
        type: String,
        enum:  ['online','venue'],
        default: 'venue'
    },
    location: {type: String},
    address : {
        addressline : {type: String},
        area : {type: String},
        city: {type: String},
        state : {type: String},
        pincode : {type: String}
    },
    description:{type:String},
    thumbnailimage:{type:String},
    images:[{type:String}],
    video:{type:String},
    ticketurl:{type:String},
    enrolledby:[
        {type: Schema.Types.ObjectId, ref: 'User'}
    ]
});
eventSchema
.virtual('url')
.get(function () {
  return '/community/'+ this.communityid +'/events/' +this._id
});
// Compile model from schema
module.exports =mongoose.model('Events', eventSchema );;
