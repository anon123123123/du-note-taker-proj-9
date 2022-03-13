const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

// Opens DB for either GET or POST
const db = fs.readFileSync('./db/db.json', 'utf8')
const dbJSON = JSON.parse(db)

// Write file handler
const writer = (newNotes) => {
    fs.writeFile('./db/db.json', newNotes, err => {
        if (err) {
            console.error(err)
            return
        }
        console.info('Database file updated')
    })
}

// POST handler for new note
const newNote = (req, res, next) => {
    const note = req.body
    note.id = uuidv4()
    dbJSON.push(note)
    const newNotes = JSON.stringify(dbJSON)
    writer(newNotes)
};

// GET returns notes 
const getNotes = (req, res, next) => {
    res.send(dbJSON)
};

// Handles Delete of note
const removeNote = (req, res, next) => {
    const noteID = req.params.id
    const noteIndex = dbJSON.findIndex(x => x.id === noteID);
    if (noteIndex > -1) { 
        dbJSON.splice(noteIndex, 1)
        writer(JSON.stringify(dbJSON))
    }
};

module.exports = {newNote, getNotes, removeNote};