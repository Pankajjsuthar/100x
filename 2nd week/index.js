const express = require('express')
const app = express()
const port = 3000

function csum(counter){
    
    var sum = 0;
    for(var i=0;i<=counter;i++){
        sum += i;
    }
    return sum;
}


function handleFirstRequest(req,res) {
    var counter = req.query.counter;
    var calculatedsum = csum(counter);
    var ans = `The sum from 1 to 100 is ${calculatedsum}`;
    res.send(ans);
}
app.get('/', handleFirstRequest)

function started(){
    console.log(`Example app is listerning on port ${port}`)
}
app.listen(port,started);


