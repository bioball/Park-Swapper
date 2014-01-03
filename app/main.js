var express = require('express');
var http    = require('http'); 
var app     = express();

global.host = 'http://localhost:3000/';

require('./config/config')(app);
require('./config/routes')(app);
require('./config/environments')(app);

app.listen(app.get('port'));
console.log('Server is listening on port ' + app.get('port'));