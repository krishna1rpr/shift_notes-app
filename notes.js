const chalk = require('chalk');
const fs = require('fs');

const getNotes = function (){
    return "your notes..";
}

const addNotes = function (title, body){
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes);
        console.log("new note added!")
    } else {
        console.log("note title taken!");
    }
    
    
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function (){
    try {
        const a = fs.readFileSync("notes.json");
        const b = a.toString();
        return (
            JSON.parse(b)
        )
    } catch(error) {
        return [];
    }
}
const removeNotes = function (title){
    const notes = loadNotes();
    const keepForEach = notes.filter(function(note){
            return(
                note.title !== title
            )
    });
    if (notes.length > keepForEach.length){
        saveNotes(keepForEach);
        console.log(chalk.inverse.green("note removed successfully"))
    }else{
        console.log(chalk.inverse.red("no note found"));
    }
    console.log(chalk.inverse.yellow("done!"));

}

module.exports ={
    getNotes: getNotes,
    addNotes: addNotes,
    loadNotes: loadNotes,
    removeNotes: removeNotes,
}