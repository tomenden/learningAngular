var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

var port = 8000;
app.listen(port);
console.log('Listening on port ' + port + '...');