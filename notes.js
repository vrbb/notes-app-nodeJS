const fs = require('fs')
const chalk = require('chalk')


const getNotes = () => {
  console.log(chalk.green.bold('Your notes ...')) 
  const notes = loadNotes()
  console.log(notes) 
  
}

const addNote =  (title, body) => {
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

const saveNotes =  (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }

}

const searchNote =  (title, notes) => {
  // return notes.filter( function(notes){
  //   return notes.title === title
  // })
  return notes.filter((note) => note.title === title)
}

const removeNote = (title) => {
  const notes = loadNotes()

  const noteRemove = notes.filter( (note) => note.title !== title)
  
  saveNotes(noteRemove)
  console.log(chalk.green.inverse('the note: ' + title + ' is removed!!'))
  

}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}