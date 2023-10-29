
const express = require('express')
const bodyParser = require('body-parser');
const { todo } = require('node:test');
const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let todolist = [];


app.get("/", (req,res) => {
    // res.send("hello");
    let html = "TO - DO - LIST";
    html += '<ul>';
    todolist.forEach((task,index) => {
        html += `<li> ${task} <br> <a href = "http://localhost:3000/deleteTask">Delete Task></a> </li>`;
    })
    html += '</ul>';
    html += 
    '<form action = "http://localhost:3000/addTask" method = "POST"><input type="text" name="task" placeholder="Enter a new task"></input><button type="submit">Add Task</button></form>';
    res.send(html);
});

app.post("/addTask", (req,res) =>{
    todolist.push(req.body.task);
    res.redirect("/");
});


app.get("/deleteTask", (req,res) => {
    todolist.pop();
    res.redirect("/");
});

function started(){
    console.log(`Example app is listerning on port ${port}`)
}
app.listen(port,started);