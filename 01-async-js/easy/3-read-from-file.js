// ## Reading the contents of a file

  



// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

function readingFile(){
    fs.readFile("main.txt","utf-8",function(err,content){
        if(err){
            console.log("File cannot be read");
        }
        console.log("Content : ",content);
    })
}

// Try to do an expensive operation below the file read and see how it affects the output. 

 async function DelayingReadfile(){
    let sum = 0;

    for(let i=1;i<1000;i++){
        sum += i;
    }
    console.log(`Sum : ${sum}`);
    readingFile();
}

setTimeout(DelayingReadfile , 7000);

// Make the expensive operation more and more expensive and see how it affects the output. 

async function Expensive(){
    return new Promise((resolve) => {
        for(let i=1;i<100000;i++){
            setTimeout(() => {
                resolve("Continue");
            },9000);
        }
    });
}
Expensive.then(()=>{
    console.log(message);
    readingFile();
});