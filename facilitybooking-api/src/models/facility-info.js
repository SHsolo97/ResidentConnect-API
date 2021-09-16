var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var facilitySchema = new Schema({
    communityid : {type:String,required:true},
    type : {type: String, required: true},
    name : {type: String, required: true},
    details : {type: String, required: true},
    bookingtype:{type:String,  enum:  ['free', 'day', 'slot'],
    default: 'free'},
    rent:{type: Number, required: true,default:0},
    timings :[
        
            {
                day:{type:String},
            
            isclosed:{type:Boolean,default:false},
            opentime:{type:String},
            closetime:{type:String},
            slots:[
                {starttime:{type:String},
                endtime:{type:String}}
            ]
            }
        

    ] 
    
})


var facilityModel = mongoose.model('facility', facilitySchema );

module.exports=facilityModel;