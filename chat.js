const express= require('express');
const app=express();
const http = require('http');
const expressServer = http.createServer(app);


const {Server} = require('socket.io');
const io = new Server(expressServer);

app.get('/', function(req, res){ res.sendFile(__dirname+'/chat.html');
});

io.on('connection', function(socket){
    socket.on('chat', function(smg){
        console.log(smg)
    })
})


expressServer.listen(3000,function(){
    console.log("server run @3000");
})

