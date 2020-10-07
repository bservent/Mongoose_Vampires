// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Require your Model
const connectionString = 'mongodb://localhost:27017/mongoose-vampires';

// 3. Require your extra data source
const db = require('./models/Vampire');
console.log(db);
const vampires = require('../populateVampires.js');

// 4. Connect your database
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
  },{
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

/* db.find({gender: "f"}, (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
}); */

/* db.find({victims:{$gt: 500 }}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* db.find({victims:{$lte: 150}}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* db.find({victims:{$ne: 210234}}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* db.find({ $and: [{victims:{$gt: 150}}, {victims: {$lt: 500}}]}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/////////////////////////////////////////////////
// ### Select by exists or does not exist
/* db.find({title: {$exists: true}}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* db.find({victims: {$exists: false}}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* db.find({ $and: [{title:{$exists: true}}, {victims:{$exists: false}}]}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* db.find({ $and: [{victims: {$exists: true}}, {victims: {$gt: 1000}}]}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/////////////////////////////////////////////////
// ### Select with OR

/* db.find({ $or: [{location: "New York, New York, US"}, {location: "New Orleans, Louisiana, US"}]}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* db.find({ $or: [{loves: "brooding"}, {loves: "being tragic"}]}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* db.find({ $or: [{victims: {$gt: 1000 }}, {loves: "marshmallows"}]}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* db.find({ $or: [{hair_color: "red"}, {eye_color: "green"}]}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}) */

/////////////////////////////////////////////////
//### Select objects that match one of several values

/* db.find({ $or: [{loves: "frilly shirtsleeves"}, {loves: "frilly collars"}]}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* db.find({ loves : 'brooding'}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

/* db.find({ $or: [{loves: "fancy cloaks"}, {loves: "frilly shirtsleeves"}, 
{loves: "appearing innocent"}, {loves: "being tragic"}, {loves: "brooding"}]}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
});  */

/* db.find({ $and: [{loves : 'fancy cloaks'}, {loves : {$nin : ["top hats", "virgin blood"]}}]}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
}); */

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

module.exports = {
    Vampire: require('./models/Vampire')
};