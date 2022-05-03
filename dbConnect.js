const mongoose = require('mongoose');

const URL =
  'mongodb+srv://hieuvu:1q2w3e4r5t@cluster0.ofpay.mongodb.net/shopfunpos';

mongoose.connect(URL);

let connectionObj = mongoose.connection;

connectionObj.on('connected', () => {
  console.log('Mongo DB conection successful');
});

connectionObj.on('error', () => {
  console.log('Mongo DB connection failed');
});
