const express=  require('express');
const app=express();
const http = require('http');
const expressServer = http.createServer(app);


const {Server} = require('socket.io');
const io = new Server(expressServer);

app.get('/', function(req, res){ 
    res.sendFile(__dirname+'/index.html');
});

io.on('connection', function(socket){
    console.log("New User Connected");

    socket.on('message', function(msg){
        console.log(msg);
    });

//     setInterval(function(){
//         let d = new Date()
//         let t = d.getTime()
//         socket.send(t)     
// });
});

expressServer.listen(5010,function(){
    console.log("server run @3000");
})

