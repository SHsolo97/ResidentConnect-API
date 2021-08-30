
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');

const advertRouter = require('./routes/advert');




const app = express();
app.use(bodyParser.json());

app.use(advertRouter);

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
  //.connect(process.env.MONGO_URI)
  .connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/buyandsellinfo?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4004,()=>{
        console.log('****************************************Buy&Sell Info Service: Listening on 4004');
    });
  })
  .catch(err => {
    console.log(err);
  });