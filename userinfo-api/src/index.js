
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');

const userRouter = require('./routes/user');




const app = express();
app.use(bodyParser.json());

app.use(userRouter);

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
  .then(() => {
    app.listen(4002,()=>{
        console.log('****************************************User Info Service: Listening on 4002');
    });
  })
  .catch(err => {
    console.log(err);
  });