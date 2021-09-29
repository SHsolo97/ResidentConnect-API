


const app = require('./app');
const mongoose = require('mongoose');
 
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