var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var pollingInfoSchema = new Schema({
    communityid :{type: String, required: true},
    createdby :{type: Schema.Types.ObjectId, ref: 'User',required: true},
    question:{type: String, required: true},
    expiredat:{type:Date,required:true},
    answeredby:[
        {type: Schema.Types.ObjectId, ref: 'User',required: true},
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