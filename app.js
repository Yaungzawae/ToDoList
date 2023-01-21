const express = require("express");
const bodyParser = require("body-parser");
const { render } = require("ejs");
// const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var data = [];

app.get("/", (req , res)=>{
    var options={
        weekday: "long",
        day:"numeric",
        month:"long"
    }
    var today = new Date().toLocaleDateString("en-US", options);
    res.render("list", {today : today, data:data});
})

app.post("/", (req, res)=>{
    var task = req.body.task;
    data.push(task);
    res.redirect("/");
})

app.listen(3000,()=>{
    console.log("Server is running in port 3000");
})

function dayOfWeekAsString(dayIndex) {
    return ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex] || '';
  }