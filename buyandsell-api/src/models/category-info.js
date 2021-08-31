var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var AdvertCategorySchema = new Schema({

    category:{type: String},
    
   
});

// Compile model from schema
module.exports =mongoose.model('category', AdvertCategorySchema );;