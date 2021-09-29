
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');

const classifiedsRouter = require('./routes/classifieds');




const app = express();
app.use(cors());
app.use(bodyParser.json());

//app.set('trust proxy',true);

//app.use(apartmentmodelsRouter);
app.use(classifiedsRouter);

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
  .connect(process.env.MONGO_URI)
  //.connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/classifiedsinfo?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4005,()=>{
        console.log('****************************************classfieds Info Service: Listening on 4005');
    });
  })
  .catch(err => {
    console.log(err);
  });