const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    type: {type:String, required:true, enum:  ['admin', 'technician','resident', 'moderator'], default: 'resident'},
    email: { type: String, required: true, unique: true },
    image: { type: String },
    bloodgroup: { type: String },
    phone:
            [
               {
                   type : {type: String, enum:  ['mobile', 'home', 'office'], default: 'mobile'},
                   number: {type: String}
                }
               
            ],
    emergencycontacts:
    [
        {
            name: { type: String },
            relationship: { type: String },
            phone:{ type: String }
        }
    ],
    
    apartments: [{type: Schema.Types.ObjectId, ref: 'apartments'}]
})
userSchema.plugin(uniqueValidator);
userSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

userSchema.virtual('fullName').get(function() {
    return this.firstname + ' ' + this.lastname;
  });
module.exports = mongoose.model('User', userSchema);