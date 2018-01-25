var app = require('express')();
var server = require('http').Server(app);
var Websocket = require('ws');

var wss = new Websocket.Server({
  port: 8080
});

wss.on('connection', function (ws) {
  console.log('server: receive connection.');

  ws.on('message', function (message) {
    console.log('server: received %s', message);
    ws.send(message)
  });

  // ws.on('pong', function () {
  //   console.log('server: received pong from client');
  // });

  ws.send('world')
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html')
})

app.listen(3000);
