const { Mongoose } = require('mongoose');

const players = {
  name: 'Hunter Valentine',
  birthDate: '9/6/2010',
  position: 'Goalie',
  img: 'picture of hunter',
  team: 'Jr Ducks',
  level: 'Peewee',
  division: 'A',
};

module.exports = players;

//? SETTING UP mongoDB SCHEMA
const playerSchema = new Mongoose.Schema({
  name: String,
  birthDate: Date,
  position: String,
  img: {
    data: Buffer,
    contentType: String,
  },
  team: String,
  level: String,
  division: String,
});

//? TELLING MONGOOSE YOU WANT TO CREATE A MODEL USING OUR SCHEMA
const Player = Mongoose.model('Player', playerSchema); // Player is our model name and it MUST BE SINGULAR WITH AN UPPERCASE FIRST LETTER! mongoDB will then lowercase this model name and make it plural so it will change the name to ---> players
