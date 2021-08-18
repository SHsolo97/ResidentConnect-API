var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var facilitybookingSchema = new Schema({
    facilityid : {type: Schema.Types.ObjectId, ref: 'facility',required: true},
   
    bookingdetails :[
        {
            day:{type:String},
            isopen:{type:Boolean},
            opentime:{type:String},
            closetime:{type:String},
            slots:[
                {
                    starttime:{type:String},
                    endTime:{type:String},
                    bookedBy:{type:String,default:null}
                
                }
            ]
        }

    ] 
    
})


var facilitybookingModel = mongoose.model('facilitybooking', facilitybookingSchema );

module.exports=facilitybookingModel;