var env = require('node-env-file');

env(__dirname + '/.env');

var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var CronJob = require('cron').CronJob;

app.set('io',io);
var porta = process.env.PORT || 8080;
http.listen(porta,function(){console.log('Server Run!');});