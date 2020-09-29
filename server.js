const express = require('express');
const http = require('http');
const app = express();
const socketio = require('socket.io');
const server = http.createServer(app);
const PORT = 8000 || process.env.PORT;
const io = socketio(server);

//Run when client connects
io.on('connection', (socket) => {
	console.log('New User');
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
