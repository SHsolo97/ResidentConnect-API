var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdvertSubCategorySchema = new Schema({
    category : {type: Schema.Types.ObjectId, ref: 'categories',required: true},

    subcategory:{type: String},
    
   
});

// Compile model from schema
module.exports =mongoose.model('subcategory', AdvertSubCategorySchema );;