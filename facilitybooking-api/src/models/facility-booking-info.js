var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var facilitybookingSchema = new Schema({
    facilityid : {type: Schema.Types.ObjectId, ref: 'facility',required: true},
   
    bookingdetails :[
        {
            date:{type:String},
            slots:
                {
                    starttime:{type:String},
                    endTime:{type:String},
                    bookedBy:{type:String,default:null}
                
               }
            
        }

    ] 
    
})


var facilitybookingModel = mongoose.model('facilitybooking', facilitybookingSchema );

module.exports=facilitybookingModel;