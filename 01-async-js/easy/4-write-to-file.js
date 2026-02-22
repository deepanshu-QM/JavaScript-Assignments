// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

async function WriteFile(){
    fs.writeFile("main.txt", "This Change will Reflect on the main File ","utf-8", (err) => {
        if(err){
            console.log("Cannot write Over the file ");
        }
        console.log("Change SucessFull");
    })
}
WriteFile();


//Second approch

const fs = require("fs").promises;

async function WritingOverfile(){
    try{
        await fs.writeFile("main.txt", "The amazing feature of this book , Chapter 9", "utf-8");
        console.log("File Change SucessFull");
    }
    catch(err){
        console.log("Cannot Write Over File");
    }
}
WritingOverfile();