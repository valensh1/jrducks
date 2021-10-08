const players = require('./Model/players.js'); //!Importing players model into backend for now to serve front-end React
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Middleware - so we can use req.body otherwise Express can't read what's in the body of our POST request. This Middleware parses data from forms in the x-www-form-urlencoded format
app.use(express.json()); // Middleware - for parsing data coming in the body of the POST request as json format
const PORT = process.env.PORT || '5000';

app.get('/players', (req, res) => {
  // res.json({ message: 'Hello from server!!!' });
  console.log(players.name);
  res.json(players);
});

app.get('/teams/', (req, res) => {
  res.json({ message: 'Hello from server!!!' });
});

app.get('*', (req, res) => {
  res.send(
    '<h1 style = "color: red">You got the wrong route you IDIOT!!!</h1>'
  );
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT} yo`);
});
