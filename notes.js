const fs = require('fs')

const getNotes = function () {
    return 'Your notes ...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = searchNote(title, notes)
    if (duplicateNotes.length === 0) {
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) 
    } catch (e) {
        return []
    }
    
}

const searchNote = function (title, notes) {
    return notes.filter( function (notes) {
        return notes.title === title
    })
}

const removeNote = function (title) {
    const notes = loadNotes()
    const noteRemove = searchNote(title, notes)
    if (noteRemove.length > 0){
        console.log('the note: '+title+' is removed!!')
    } else {
        console.log('Don\'t have a note with this title!')
    }

}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote
}