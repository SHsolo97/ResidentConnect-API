
var Community = require('../models/community');
var ObjectId = require('mongodb').ObjectID;

var mongoose = require('mongoose');

//const MongoClient=require('mongodb').MongoClient;

//Set up default mongoose connection
var url = 'mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/apartmentsinfo?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



exports.community_list = async function(req, res) {
    const data = await db.collection('communities').find().toArray();
    res.status(200).send(data);

};

exports.community_detail = async function(req, res) {
    const communityid=req.params.id;
    const data = await db.collection('communities').find({"_id": new ObjectId(communityid)}).toArray();

    res.status(200).send(data);
};



exports.community_create_post =async function(req, res) {
 
   const community=req.body;
   db.collection('communities').insertOne(community)   
   .then(result => {
    res.status(201).send(community);
   })
   .catch(error => console.error(error))
};

exports.community_add_blocks=async function(req,res){
    var updateObject = req.body; 
    var id = req.params.id;
    await db.collection('communities').update({_id  : ObjectId(id)}, {$set: updateObject});
    res.status(200).send({});

}

exports.community_add_floors=async function(req,res){
    var updateObject = req.body; 
    var id = req.params.id;
    await db.collection('communities').update({_id  : ObjectId(id)}, {$set: updateObject});
    res.status(200).send({});

}

