const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/mainpage.html");

});



app.listen(3000, listening);


function listening() {
    console.log("listening");
}

