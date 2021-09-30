
const app = require('./app');
const mongoose = require('mongoose');

 
mongoose
  //.connect( process.env.MONGO_URI)
  .connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/apartmentsinfo?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4000,()=>{
        console.log('****************************************Apartment Info Service: Listening on 4000');
    });
  })
  .catch(err => {
    console.log(err);
  });