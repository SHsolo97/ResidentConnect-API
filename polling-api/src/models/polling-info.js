var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var pollingInfoSchema = new Schema({
    communityid :{type: String, required: true},
    userid :{type: String, required: true},
    question:{type: String, required: true},
    startdate:{type:String,required:true},
    enddate:{type:String,requied:true},
    answeredby:[
        {type:String}
    ],
    totalvotes:{type:Number,default:0},
    options:[
        {
            description:{type:String},
            votes:{type:Number,default:0}
        }
    ]
  
    
   
});

// Compile model from schema
module.exports =mongoose.model('pollings', pollingInfoSchema );;