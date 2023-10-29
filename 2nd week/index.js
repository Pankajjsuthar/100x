const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000


function middleware (req,res,next){
    console.log("from inside of middleware " + req.body.counter);
    next();
}

// app.use(middleware);
app.use(bodyParser.json());

function csum(counter){
    var sum = 0;
    for(var i=0;i<=counter;i++){
        sum += i;
    }
    return sum;
}

function mult(counter){
    var ans = 1;
    for(var i = 0;i<counter;i++){
        ans *= i+1;
    }
    return ans;
}


function givePage(req,res){
    var obj = {
        "Name" : "Pankaj",
        "Kam" : "krle bete"
    };
    res.send(obj);
}

app.get("/", givePage);


function handleFirstRequest(req,res) {
    var counter = req.query.counter;
    var sum = csum(counter);
    var mul = mult(counter);

    var answer = {
        calsum : sum,
        calmul : mul
    };

    res.status(200).send(answer);
}

app.get('/handlesum', handleFirstRequest);

function started(){
    console.log(`Example app is listerning on port ${port}`)
}
app.listen(port,started);


