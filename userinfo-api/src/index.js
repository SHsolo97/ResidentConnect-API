
const app = require('./app');
const mongoose = require('mongoose');

mongoose
  //.connect(process.env.MONGO_URI)
  .connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/usersinfo?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4002,()=>{
        console.log('****************************************User Info Service: Listening on 4002');
    });
  })
  .catch(err => {
    console.log(err);
  });