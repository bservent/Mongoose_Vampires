// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Require your Model
const connectionString = 'mongodb://localhost:27017/mongoose-vampires';

// 3. Require your extra data source
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

// 4. Connect your database
const db = require('./models/vampire.js');
const vampires = require('../populateVampires.js');

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//check to see whats in database
/* db.find({}, (err, data) => {
    console.log(data);
}); */
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
/* db.insertMany(vampires, (err, data) => {
    mongoose.connection.close();
}) */
// ### Add some new vampire data

/* db.create({
    name: 'Ralf',
    hair_color: 'blue',
    eye_color: 'black',
    dob: new Date(1971, 5, 13, 7, 47),
    loves: ['pizza','rats'],
    location: 'Eagle River, Minnesota, US',
    gender: 'f',
    victims: 1
  }, (err, data) => {
      if (err) console.log(err);
      console.log(data);
      mongoose.connection.close();
  }) */
/*   db.create({
    name: 'Lilu',
    hair_color: 'black',
    eye_color: 'grey',
    dob: new Date(1999, 5, 13, 8, 47),
    loves: ['icecream','dead kittys'],
    location: 'Lakes, Minnesota, US',
    gender: 'm',
    victims: 100000000000
  },{
    name: 'Viv',
    hair_color: 'metalic',
    eye_color: 'red',
    dob: new Date(1971, 5, 13, 7, 47),
    loves: ['dolm','reading in under the moonlight'],
    location: 'Duluth, Minnesota, US',
    gender: 'f',
    victims: 10
  },{
    name: 'Kevin',
    hair_color: 'purple',
    eye_color: 'pink',
    dob: new Date(1971, 5, 13, 7, 47),
    loves: ['discos','dancing'],
    location: 'Minnetonka, Minnesota, US',
    gender: 'm',
    victims: 1
  }, (err, data) => {
      if (err) console.log(err);
      console.log(data);
      mongoose.connection.close();
  }); */
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
