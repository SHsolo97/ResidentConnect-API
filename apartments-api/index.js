
const express = require('express');
const bodyParser = require('body-parser');

var communityRouter = require('./src/routes/community');
var apartmentmodelsRouter = require('./src/routes/apartmentmodels');
var apartmentsRouter=require('./src/routes/apartments');



const app = express();
app.use(bodyParser.json());

//app.set('trust proxy',true);

app.use(apartmentmodelsRouter);
app.use(apartmentsRouter);
app.use(communityRouter);


app.listen(4000, () => {

    console.log('Apartment Info Service: Listening on 4000');
});