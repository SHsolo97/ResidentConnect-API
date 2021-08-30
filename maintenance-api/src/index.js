
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const maintenanceRouter = require('./routes/maintenanceRouter');




const app = express();
app.use(bodyParser.json());

//app.set('trust proxy',true);

//app.use(apartmentmodelsRouter);
app.use(maintenanceRouter);

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
  .connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/maintenanceinfo?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4009,()=>{
        console.log('****************************************Maintenance Request Info Service: Listening on 4009');
    });
  })
  .catch(err => {
    console.log(err);
  });