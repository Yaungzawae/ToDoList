// Setting Up the modules
const express = require("express");
const bodyParser = require("body-parser");
const formatedDate = require(__dirname + "/date.js");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//new task data storage
const data = [];

//main route get method
app.get("/", (req , res)=>{
    let today = formatedDate.getDate();
    res.render("list", {today : today, data:data});
})

//main route post method
app.post("/", (req, res)=>{
    let task = req.body.task;
    data.push(task);
    res.redirect("/");
})

//create server
app.listen(3000,()=>{
    console.log("Server is running in port 3000");
})
