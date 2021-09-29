
const app = require('./app');
const mongoose = require('mongoose');

mongoose
  //.connect(process.env.MONGO_URI)
  .connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/pollinginfo?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4007,()=>{
        console.log('****************************************Polling Info Service: Listening on 4007');
    });
  })
  .catch(err => {
    console.log(err);
  });