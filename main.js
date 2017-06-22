var express = require("express");
var app = express();
var data = require("./data.js");
var port = 10000;
var mustacheExpress = require("mustache-express");


app.use(express.static('./public'))

app.engine("mustache", mustacheExpress());
app.set("views", "./public");
app.set("view engine", "mustache");

app.get("/", function( request, response){
    response.render("index", {allData: data.users});
})

app.get("/:id", function( request, response){
    var userID = request.params.id;
    response.render("profile" , {allData: data.users[userID-1]});
})

app.listen(port, function(){
    console.log("Your user directory is running in PORT: " + port);
});
