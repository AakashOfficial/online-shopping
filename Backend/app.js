var express = require("../node_modules/express");
var bodyParser = require("../node_modules/body-parser");
var path = require("../node_modules/path");
const router = express.Router();

var app = express();

app.listen("8088");
console.log("Connected");

app.get('/', function(req, res) {
    res.send("Working");
});