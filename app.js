const notes = require('./notes');
const yargs = require('yargs');


yargs.command({
    command: 'add',
    describe: 'adding a note!',
    builder: {
        title: {
            describe: "this is title",
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'this is body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
       notes.addNotes(argv.title, argv.body) 
    }
})

yargs.command({
    command: "remove",
    describe: "removing notes",
    builder: {
        title: {
            describe: "title note",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
            notes.removeNotes(argv.title);
    }
})
yargs.parse();
// yargs.command({
//     command: 'remove',
//     describe: 'removing a note',
//     handler: function (){
//         console.log("this part removes the note");
//     }
// })

// yargs.command({
//     command: 'list',
//     describe: 'listing a note',
//     handler: function(){
//         console.log("this part lists the notes")
//     }
// })

// yargs.command({
//     command: 'read',
//     describe: 'reading a note',
//     handler: function(){
//         console.log("this part reads the note");
//     }
// })

// yargs.command({
//     command: 'try',
//     describe: 'this is for trying',
//     handler: function (){
//         console.log("this is doing it");
//     },
//     builder: {
//         body: {
//             describe: 'this is body',
//             demandOption: true,
//             type: 'string'
//         }
//     }
// })

// console.log(yargs.argv);