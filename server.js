// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

var ROOT_PATH = "/";
var DATE_API_PATH = ROOT_PATH + "api/timestamp/:date_string";

function parseAndReturnJson(req) {  
  if 
  var date;
  if (param === "" || !isNaN(param) || param == null) {
    date = new Date();
  }
  else {
    date = new Date(param);
    if(!(date instanceof Date && !isNaN(date))) {
      return {"error" : "Invalid Date" };      
    }
  }  
  console.log(date.toUTCString());
  return {unix: date.getTime(), utc: date.toUTCString()};
}

function createDateFromReq(req,res) {
  return res.json(parseAndReturnJson(req));
}

app.get(DATE_API_PATH,createDateFromReq);


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});