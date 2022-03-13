const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

// Opens DB for either GET or POST
const db = fs.readFileSync('./db/db.json', 'utf8')
const dbJSON = JSON.parse(db)

// POST handler for new note
const newNote = (req, res, next) => {
    const note = req.body
    note.id = uuidv4()
    dbJSON.push(note)
    const newNotes = JSON.stringify(dbJSON)
    fs.writeFile('./db/db.json', newNotes, err => {
        if (err) {
            console.error(err)
            return
        }
        console.info('Database file updated')
    })
};

// GET returns notes 
const getNotes = (req, res, next) => {
    res.send(dbJSON)
};

module.exports = {newNote, getNotes};