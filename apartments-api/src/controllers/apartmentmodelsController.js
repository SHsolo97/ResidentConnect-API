
var apartmentModel = require('../models/apartmentmodel');
var ObjectId = require('mongodb').ObjectID;

var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/apartmentsinfo?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


exports.models_list = async function(req, res) {
    const communityid=req.params.communityid;
    const data = await db.collection('apartmentmodels').find({"communityid": new ObjectId(communityid)}).toArray();

    res.status(400).send(data);

};

exports.model_details = async function(req, res) {
    const communityid=req.params.communityid;
    const modelid=req.params.modelid;
  
    const data = await db.collection('apartmentmodels').find({"communityid": new ObjectId(communityid),"_id": new ObjectId(modelid)}).toArray();

    res.status(400).send(data);

};

exports.model_create_post = async function(req, res) {
    const communityid=req.params.communityid;
    const model=req.body;
    model.communityid=new ObjectId(communityid);
    //console.log(model);
    db.collection('apartmentmodels').insertOne(model)   
    .then(result => {
     res.status(201).send(model);
    })
    .catch(error => console.error(error))

};

exports.model_update = async function(req, res) {
    res.status(400).send({});

};

