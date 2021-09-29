


const app = require('./app');
const mongoose = require('mongoose');

mongoose
//.connect(process.env.MONGO_URI)
.connect('mongodb+srv://admin:admin@residentsconnect-cluste.r0t44.mongodb.net/buyandsellinfo?retryWrites=true&w=majority')
.then(() => {
app.listen(4004,()=>{
console.log('****************************************Buy&Sell Info Service: Listening on 4004');
});
})
.catch(err => {
console.log(err);
});