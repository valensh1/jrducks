require('dotenv').config();
const Players = require('./Model/playersModel.js'); //!Importing players model into backend for now to serve front-end React
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.on('open', () => {
  console.log('Mongo is Connected');
});

//? MIDDLEWARE
// app.use(express.json());
// if (process.env.NODE_ENV !== 'development') {
//   // app.use(express.static('public'));
//   app.use('/static', express.static(path.join(__dirname, 'build')));
// }

app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  // app.use(express.static('public'));
  app.use(express.static(path.join(__dirname, 'build')));
}

const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Middleware - so we can use req.body otherwise Express can't read what's in the body of our POST request. This Middleware parses data from forms in the x-www-form-urlencoded format
app.use(express.json()); // Middleware - for parsing data coming in the body of the POST request as json format

//? GET REQUEST - INDEX ROUTE - SHOW ALL PLAYERS UPON HITTING THIS ROUTE
app.get('/players', async (req, res) => {
  try {
    const roster = await Players.find({});
    res.json(roster);
  } catch (error) {
    res.status(400).json(error);
  }
});

//? GET REQUEST - SHOW PAGE (INDIVIDUAL PLAYER)
app.get('/players/:id', async (req, res) => {
  try {
    const playerProfile = await Players.findById(req.params.id);
    res.status(200).json(playerProfile);
    console.log(playerProfile);
  } catch (error) {
    res.status(400).send(error);
  }
});

//? POST REQUEST - CREATE ROUTE - POST NEW PLAYER DATA TO MONGODB FROM NEW PLAYER FORM ON NewPlayer.js file
app.post('/players', async (req, res) => {
  try {
    console.log(req.body);
    await Players.create(req.body);
    res.redirect('/players');
  } catch (error) {
    console.log(error);
  }
});

app.get('/teams', async (req, res) => {
  try {
    await res.json({ message: 'Hello from server!!!' });
  } catch (error) {
    console.log(error);
  }
});

app.get('/', (req, res) => {
  // res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')));
  // res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} yo`);
});
