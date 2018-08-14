const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require("socket.io");


const app = express();
const port= process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*',(req, res)=>{
        res.sendFile(path.join(__dirname, 'dist/index.html'));
});




const server = http.createServer(app);
const  io = socketIO(server);

io.on('connection', (socket)=>{

    console.log("novo usuario conectado");

    socket.on('disconnect', ()=>{
        console.log("usuario desconectado: "+socket.id)
    });

    socket.on('msg', (msg)=>{
        console.log(msg);
        socket.broadcast.emit('msg', msg);
    })

})



server.listen(port, ()=>{
    console.log("servidor node ligado na port 3000");
})