// Imports
const express = require('express')
const path = require('path');
const api = require('./routes/index.js');

// Server Consts 
const app = express()
const port = process.env.PORT || 3001

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle Routing 
app.use('/api', api);

app.use(express.static('public'));

// GET Route for notes  static page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// GET Route for index if matches anything not /api or /notes 
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// Start Server 
app.listen(port, () => {
  console.log(`Note App listening on port ${port}`)
})