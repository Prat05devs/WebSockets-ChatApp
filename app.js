const express = require('express'); // initialize express app
const path = require('path'); // initialize path
const app = express(); // initialize express app
const PORT = process.env.PORT || 4000; // set port
//create a server
const server = app.listen(PORT, () => console.log(`💬 server running on ${PORT}`))

const io = require('socket.io')(server); // initialize socket.io

//set public folder as a public directory of this application 
app.use(express.static(path.join(__dirname, 'public'))); 
//dirname is the directory name of the current module and public is the folder name of the public directory
 
let socketsConnected = new Set(); //create a set to store the connected clients

//listen for an event on connection on socket.io
io.on('connection', onConnected); //log the socket id of the connected client

function onConnected(socket) {
    console.log(socket.id);
    socketsConnected.add(socket.id); //add the socket id to the set

    io.emit('clients-total', socketsConnected.size); //send the number of connected clients to all the clients
    //it emits to everyone including the sender

    socket.on('disconnect', () => {
        console.log('disconnected', socket.id);
        socketsConnected.delete(socket.id); //delete the socket id from the set
        io.emit('clients-total', socketsConnected.size); //send the number of connected clients to all the clients
    });

    socket.on('message', (data) => {
        console.log(data); //log the data object
        socket.broadcast.emit('chat-message', data); //send the message to all the clients except the sender
    });

    socket.on('feedback', (data) => {
        socket.broadcast.emit('feedback', data); //send the feedback to all the clients except the sender
    });
}
//in socket.io all the clients gets reconnected to the server when the server restarts