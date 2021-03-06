const fs = require('fs')
const chalk = require('chalk')
const { describe, string } = require('yargs')
const yargs = require('yargs')

const notes = require('./notes.js')

const command = process.argv[2]
// custumize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title.',
      require: true,
      type: 'string'
    },
    body: {
      describe: 'Contents of the note.',
      require: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body)
  }
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'Note title.',
      require: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler: () => {
    notes.getNotes()
  }
})

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title.',
      require: true,
      type: 'string'
    }
  },
  handler:  (argv) => {
    notes.readNote(argv.title);
  }
})

yargs.parse()