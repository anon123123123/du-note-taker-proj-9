const nt = require('express').Router();
const notesController = require('../controllers/notes')

nt.get('/', notesController.getNotes)

nt.post('/', notesController.newNote)

module.exports = nt 