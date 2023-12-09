const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000
app.use(bodyParser.json());

function middleware (req,res,next){
    // console.log(req.body);
    console.log("from inside of middleware " + req.body.counter);
    next();
}

app.use(middleware);


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

// function givePage(req,res){
//     res.send("<head><title>Hello from Page</title></head><body><b>Hi there</b></body>")
// }

//or 
// function givePage(req,res){
//     res.send(`<head>
//                 <title>
//                     Hello from Page
//                 </title>
//             </head>

//             <body>
//                 <b>Hi there</b>
//             </body>`)
// }


app.get("/", givePage);

// or 
// function givePage(req,res){
//     res.sendFile(__dirname + "./index.html");
// }

function handleFirstRequest(req,res) {
    // console.log(req.body);
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


