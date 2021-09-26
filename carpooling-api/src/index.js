
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');
const carpoolingRouter=require('./routes/carpooling');
const HttpError = require('./models/http-error');



const app = express();
app.use(bodyParser.json());
app.use(cors());
//app.set('trust proxy',true);

app.use(carpoolingRouter);
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
  });
  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
  });  

 
mongoose
  //.connect( process.env.MONGO_URI)
  .connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/carpoolinginfo?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4006,()=>{
        console.log('****************************************Carpooling info Service: Listening on 4006');
    });
  })
  .catch(err => {
    console.log(err);
  });