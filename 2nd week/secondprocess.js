const fetch = require("node-fetch");

function logresponsebody(jsonBody){
    console.log(jsonBody);
}

function callbackfn(result){
    result.json().then(logresponsebody);
}

var sendObj = {
    method : "GET"
};

fetch("http://localhost:3000/handlesum?counter=10", sendObj).then(callbackfn);