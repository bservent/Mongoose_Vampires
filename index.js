const mongoose = require('mongoose');
const vampires = require('./populateVampires');

const connectionString = 'mongodb://localhost:28017/mongoose-vampires';


mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
  });
  
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connected error ${err}`);
  });
  
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

  module.exports= vampires;

