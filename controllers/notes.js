const fs = require('fs')


// POST handler for new note
const newNote = (req, res, next) => {
    console.log("POST")
};

// GET returns notes 
const getNotes = (req, res, next) => {
    const db = fs.readFile('./db/db.json', 'utf8', function read(err, data)  {
        if(err) {
            console.error('Unable to open db.json')
        } else {
            const dbJSON = JSON.parse(data)
            res.send(dbJSON)
        }
    })
};

module.exports = {newNote, getNotes};