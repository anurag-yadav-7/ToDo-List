const bodyParser = require("body-parser");
const express = require("express");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
var items= ["Buy Food","Cook Food","Eat Food"];
var item = "";
let workItems = [];

app.get("/", function(req, res) {


  const day = date.getDate();
  console.log(date.getDate());
  console.log(date.getDay());
  res.render("list", {listTitle: day,newListItems: items});

  // res.send("<h1>Today is: " + day + "</h1>");

});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List" , newListItems: workItems})
});

app.get("/about", function (res,res)
{
  res.render("about");
});

app.post("/",function(req,res){

  item = req.body.NextItem;

  if(req.body.List === "Work")
  {
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }

});

app.listen(3000, function() {
  console.log("Server is running at port: 3000");
})
