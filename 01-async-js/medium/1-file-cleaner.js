// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs');

function CleanAfile() {

          //Reading 
    fs.readFile("file.txt", "utf-8", (err, content) => {
        if (err) {
            console.log("File Cannot be read");
            return;
        }

        // Remove extra spaces
        let data = content.replace(/\s+/g, ' ').trim();

        // Write cleaned content back
        fs.writeFile("file.txt", data, (err) => {
            if (err) {
                console.log("Cannot write over the File");
                return;
            }
            console.log("Changes Successful");
        });
    });
}

CleanAfile();
