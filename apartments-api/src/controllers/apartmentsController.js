var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/apartmentsinfo?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


exports.apartments_list = async function(req, res) {
    const communityid=req.params.communityid;
    const data = await db.collection('apartments').find({"communityid": new ObjectId(communityid)}).toArray();
    res.status(400).send(data);
};

exports.apartment_details = async function(req, res) {
    const communityid=req.params.communityid;
    const apartmentid=req.params.apartmentid;  
    const data = await db.collection('apartments').find({"communityid": new ObjectId(communityid),"_id": new ObjectId(apartmentid)}).toArray();
    res.status(400).send(data);
};

exports.apartment_update = async function(req, res) {
    const communityid=req.params.communityid;  
    res.status(400).send({});

};

exports.apartment_create_post = async function(req, res) {
    const communityid=req.params.communityid;  
    const apartment=req.body;
    apartment.communityid=new ObjectId(communityid);
    //console.log(model);
    db.collection('apartments').insertOne(model)   
    .then(result => {
     res.status(201).send(model);
    })
    .catch(error => console.error(error))

  

};