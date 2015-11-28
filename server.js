//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function(req, res){
  res.render('index');
});

router.get('/get/json', function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: "JSON AJAX Works!" }));
});

router.post('/post/json', function(req,res){
  console.log(req.body);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});