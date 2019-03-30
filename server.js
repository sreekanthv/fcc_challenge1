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
var DATE_EMPTY_PATH = ROOT_PATH + "api/timestamp/";

function parseAndReturnJson(param) {  
  var date;
  if (param === "" || param == null) {
    console.log("got nonstringparam " + param);
    date = new Date();
  }
  else {
    date = new Date(param);
    console.log(param);
    console.log("date is " + date);
    if(!(date instanceof Date && !isNaN(date))) {
      return {"error" : "Invalid Date" };      
    }
  }  
  //console.log(date.toUTCString());
  return {unix: date.getTime(), utc: date.toUTCString()};
}

function createDateFromReq(req,res) {
  return res.json(parseAndReturnJson(req.params.date_string));
}
function createDateFromEmpty(req,res) {
  return res.json(parseAndReturnJson(null));
}


app.get(DATE_API_PATH,createDateFromReq);
app.get(DATE_EMPTY_PATH,createDateFromReq);


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});