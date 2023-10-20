// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman

// After the program runs, the output should be

// hello world my name is raman

const fs = require("fs");
function read(){
    var st = "";
    fs.readFile("example.txt", "utf-8", (err,data) =>{
        if(err){
            console.log("Error in reading the file");
        }
        else{
            st += data;
            console.log(st);
            const cleanedSentence = st.replace(/\s+/g, ' ');
            write(cleanedSentence);
        }
    });
}



function write(st){
    fs.writeFile("example.txt", st, "utf-8",(err)=>{
        if(err){
            console.log("There is error in update the file : ",err);
        }
        else{
            console.log(st);
        }
    });
}

read();



