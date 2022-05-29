const fs = require('fs')
const chalk = require('chalk')
const { describe, string } = require('yargs')
const yargs = require('yargs')

const getNotes = require('./notes.js')

const command = process.argv[2]
// custumize yargs version
yargs.version('1.1.0')

// create add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title.',
            require : true,
            type : 'string'
        },
        body : {
            describe : 'Contents of the note.',
            require : true,
            type : 'string'
        }
    },
    handler : function (argv) {
        console.log('Adding a new note!\nYour title: '+argv.title)
        fs.writeFileSync('notes.json',JSON.stringify(argv))
        console.log('Your body: '+argv.body)
    }
})

// create remove command
yargs.command({
    command : 'remove',
    describe: 'Remove a new note',
    handler : function () {
        console.log('Removing a the note!')
    }
})

// create list command
yargs.command({
    command : 'list',
    describe: 'List the notes',
    handler : function () {
        console.log('Listing out all notes!')
        console.log(fs.readFileSync('notes.json').toString)

    }
})

// create read command
yargs.command({
    command : 'read',
    describe: 'Read a note',
    handler : function () {
        console.log('Reading a note!')
    }
})


// add, remove, read, list

console.log(command)
console.log(yargs.argv)

if(command == 'add'){
    console.log('Adding note!')
} else if (command == 'remove'){
    console.log('Removing note!')
}

yargs.parse()