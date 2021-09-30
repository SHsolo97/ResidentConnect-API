
const app = require('./app');
const mongoose = require('mongoose');

mongoose
  //.connect(process.env.MONGO_URI)
  .connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/classifiedsinfo?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4005,()=>{
        console.log('****************************************classfieds Info Service: Listening on 4005');
    });
  })
  .catch(err => {
    console.log(err);
  });