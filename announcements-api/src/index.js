
const app = require('./app');
const mongoose = require('mongoose');

mongoose
  //.connect(process.env.MONGO_URI)
  .connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/announcementsinfo?retryWrites=true&w=majority')
  .then(() => {
    app.listen(4010,()=>{
        console.log('****************************************Announcement Info Service: Listening on 4010');
    });
  })
  .catch(err => {
    console.log(err);
  });