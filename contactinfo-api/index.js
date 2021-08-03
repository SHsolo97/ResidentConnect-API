
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const contactinfoRouter = require('./src/routes/contactinfo');




const app = express();
app.use(bodyParser.json());

//app.set('trust proxy',true);

//app.use(apartmentmodelsRouter);
app.use(contactinfoRouter);

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
  .connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/apartmentsinfo?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4001,()=>{
        console.log('Contact Info Service: Listening on 4001');
    });
  })
  .catch(err => {
    console.log(err);
  });