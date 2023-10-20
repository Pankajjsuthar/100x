const fs = require("fs");

function print(err,data) {
    if(err){
        console.log("We got an error!");
    }
    else{
        console.log(data);
    }
}

const data_to_write = "Hehe ab m isme likh rha hu. Mst h ekdum. Baigan .... aayein";

fs.readFile("hello.txt", "utf-8", print);

setTimeout(write,2000);

function write() {
    fs.writeFile("hello.txt",data_to_write,"utf-8",(err) => {
    if(err){
        console.log('Error writing to the file: ', err);
    }
    else{
        fs.readFile("hello.txt", "utf-8", print);
    }
})
}



// isme kya hoga ki jub run krenge to ek khaas baat hogi ki pehle text file me jo likha hoga use read kr lega lekin
// fir baad m use change bhi kr dega