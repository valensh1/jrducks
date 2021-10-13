const mongoose = require('mongoose');

//? SETTING UP mongoDB SCHEMA
const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthDate: Date,
  position: {
    type: String,
    required: true,
    enum: ['Forward', 'Defenseman', 'Goalie', 'Coach', 'Assistant Coach'],
  },
  img: {
    // data: Buffer,
    // contentType: String,
    type: String,
    required: false,
  },
  team: {
    type: String,
    required: true,
    enum: [
      'Jr. Ducks',
      'Jr. Condors',
      'Bay Harbor Red Wings',
      'California Golden Bears',
      'California Heat',
      'California Wave',
      'Desert Blaze',
      'Empire Hockey Club',
      'Goldrush Hockey Club',
      'Jr. Ice Dogs',
      'Jr. Reign',
      'Jr. Kings',
      'OC Hockey Club',
      'Moose',
      'Maple Leafs',
      'Rose City Pats',
      'Jr. Gulls',
      'Saints',
      'Ice Hawks',
      'Jr. Flyers',
      'SDIA Hockey Club',
      'Mariners',
      'Lady Ducks',
    ],
  },
  division: {
    type: String,
    required: true,
    enum: [
      'Mites',
      'Squirt',
      'PeeWee',
      'Bantam',
      'Midget',
      'Juvenile',
      'Junior',
      'Senior',
    ],
  },
  level: {
    type: String,
    required: true,
    uppercase: true,
    enum: ['B', 'BB', 'A', 'AA', 'AAA'],
  },
  location: {
    type: String,
    required: true,
    enum: [
      'Anaheim',
      'Great Park',
      'Lakewood',
      'Westminster',
      'Bakersfield',
      'Torrance',
      'Burbank',
      'Panorama City',
      'Palm Springs',
      'Ontario',
      'Aliso Viejo',
      'Riverside',
      'Los Angeles',
      'Yorba Linda',
      'Pasadena',
      'San Diego',
      'Santa Barbara',
      'Valencia',
      'Simi Valley',
    ],
  },
});

//? TELLING MONGOOSE YOU WANT TO CREATE A MODEL USING OUR SCHEMA
const Player = mongoose.model('Player', playerSchema); // Player is our model name and it MUST BE SINGULAR WITH AN UPPERCASE FIRST LETTER! mongoDB will then lowercase this model name and make it plural so it will change the name to ---> players

/*
const player1 = new Player({
  name: 'Hunter Valentine',
  birthDate: '09-06-2010',
  position: 'Goalie',
  img: 'https://www.ocregister.com/wp-content/uploads/2019/12/Golden-Knights-Ducks-Hockey-5-5.jpg',
  team: 'Jr. Ducks',
  division: 'PeeWee',
  level: 'A',
  location: 'Great Park',
});

player1.save();
*/

// const player2 = new Player({
//   name: 'Hunter Valentine',
//   birthDate: '09-06-2010',
//   position: 'Goalie',
//   img: 'https://photos.google.com/photo/AF1QipOixj2KG3jk0LJn30c6Xx4IVuNPlzzkLcdNTw6x',
//   team: 'Jr. Ducks',
//   division: 'PeeWee',
//   level: 'A',
//   location: 'Great Park',
// });

// player2.save();

module.exports = Player;
