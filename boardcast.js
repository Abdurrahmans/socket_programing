const express= require('express');
const app=express();
const http = require('http');
const expressServer = http.createServer(app);


const {Server} = require('socket.io');
const io = new Server(expressServer);

app.get('/', function(req, res){ res.sendFile(__dirname+'/boardcast.html');
});

var clients = 0;
io.on('connection', function(socket){
    clients++;
    socket.emit('newclientconnect',{ description: 'Hey, welcome!'});
    socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
    socket.on('disconnect', function () {
       clients--;
       socket.broadcast.emit('newclientconnect',{ description: clients + ' clients connected!'})
    });
 });
expressServer.listen(3000,function(){
    console.log("server run @3000");
})

