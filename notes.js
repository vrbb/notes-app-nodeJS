const fs = require('fs')
const chalk = require('chalk')


const getNotes = function () {
  return 'Your notes ...'
}

const addNote = function (title, body) {
  const notes = loadNotes()
  const duplicateNotes = searchNote(title, notes)
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
  } else {
    console.log(chalk.red.inverse('Note title taken!'))
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
  return notes.filter( () => {
    return this.title === title
  })
}

const removeNote = function (title) {
  const notes = loadNotes()

  const noteRemove = notes.filter( function (title,notes) {
    return notes.title !== title
  })
  
  saveNotes(noteRemove)
  console.log(chalk.green.inverse('the note: ' + title + ' is removed!!'))
  

}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}