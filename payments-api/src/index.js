


const app = require('./app');
const mongoose = require('mongoose');

mongoose
 //.connect(process.env.MONGO_URI)
 .connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/paymentsinfo?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4012,()=>{
        console.log('****************************************Payment Request Info Service: Listening on 4012');
    });
  })
  .catch(err => {
    console.log(err);
  });