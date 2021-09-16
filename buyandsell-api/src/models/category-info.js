var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdvertCategorySchema = new Schema({

    category:{type: String},
    
   
});

// Compile model from schema
module.exports =mongoose.model('category', AdvertCategorySchema );;