const express = require('express');
const http = require('http');
const app = express();
const socketio = require('socket.io');
const server = http.createServer(app);
const PORT = 8000 || process.env.PORT;
const io = socketio(server);

//Run when client connects
io.on('connection', (socket) => {
	console.log('New WS Connection ....');
	//Welcome Current user
	socket.emit('message', 'Welcome to CHATCORD!');

	//Broad when a user connects

	socket.broadcast.emit('message', 'A user Joined the chat');

	// Runs when client disconnects

	socket.on('disconnect', () => {
		io.emit('message', 'A user has left the chat');
	});
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
