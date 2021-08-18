var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var facilitySchema = new Schema({
    communityid : {type:String,required:true},
    type : {type: String, required: true},
    name : {type: String, required: true},
    timings :[
        {
            day:{type:String},
            isopen:{type:Boolean},
            opentime:{type:String},
            closetime:{type:String},
            slots:[
                {starttime:{type:String},
                endTime:{type:String}}
            ]
        }

    ] 
    
})


var facilityModel = mongoose.model('facility', facilitySchema );

module.exports=facilityModel;